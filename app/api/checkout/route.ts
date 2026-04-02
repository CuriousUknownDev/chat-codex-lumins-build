import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { items } = await request.json();
    const origin = request.headers.get('origin') || 'https://lumins-main.vercel.app';

    const params = new URLSearchParams();
    params.append('mode', 'payment');
    params.append('success_url', origin + '/shop?order=success');
    params.append('cancel_url', origin + '/shop');

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
