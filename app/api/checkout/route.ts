import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { items } = await request.json();
    const origin = request.headers.get('origin') || 'https://lumins-main.vercel.app';

    const params = new URLSearchParams();
    params.append('mode', 'payment');
    params.append('success_url', origin + '/shop?order=success');
    params.append('cancel_url', origin + '/shop');

    // Calculate subtotal to determine shipping rate
    const subtotalCents = items.reduce((sum: number, item: { price: number; qty: number }) =>
      sum + Math.round(item.price * 100) * item.qty, 0);
    const freeShipping = subtotalCents >= 100000; // free over $1,000

    items.forEach((item: { name: string; price: number; qty: number; caseOnly?: boolean; caseQty?: number; sku?: string }, i: number) => {
      const label = item.caseOnly
        ? item.name + ' — Case of ' + (item.caseQty || 25)
        : item.name;
      params.append('line_items[' + i + '][price_data][currency]', 'usd');
      params.append('line_items[' + i + '][price_data][product_data][name]', label);
      params.append('line_items[' + i + '][price_data][product_data][metadata][sku]', item.sku || '');
      params.append('line_items[' + i + '][price_data][unit_amount]', String(Math.round(item.price * 100)));
      params.append('line_items[' + i + '][quantity]', String(item.qty));
    });

    // Shipping address collection (US only per Terms & Conditions)
    params.append('shipping_address_collection[allowed_countries][0]', 'US');

    // Shipping rate — free over $1,000, otherwise $15 standard (5–7 business days)
    params.append('shipping_options[0][shipping_rate_data][type]', 'fixed_amount');
    params.append('shipping_options[0][shipping_rate_data][display_name]', freeShipping ? 'Free Shipping' : 'Standard Shipping');
    params.append('shipping_options[0][shipping_rate_data][fixed_amount][amount]', freeShipping ? '0' : '1500');
    params.append('shipping_options[0][shipping_rate_data][fixed_amount][currency]', 'usd');
    params.append('shipping_options[0][shipping_rate_data][delivery_estimate][minimum][unit]', 'business_day');
    params.append('shipping_options[0][shipping_rate_data][delivery_estimate][minimum][value]', '5');
    params.append('shipping_options[0][shipping_rate_data][delivery_estimate][maximum][unit]', 'business_day');
    params.append('shipping_options[0][shipping_rate_data][delivery_estimate][maximum][value]', '7');

    // Automatic sales tax via Stripe Tax
    params.append('automatic_tax[enabled]', 'true');

    const stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + process.env.STRIPE_SECRET_KEY,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const session = await stripeRes.json();

    if (!stripeRes.ok) {
      return NextResponse.json({ error: session.error?.message || 'Stripe error' }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
