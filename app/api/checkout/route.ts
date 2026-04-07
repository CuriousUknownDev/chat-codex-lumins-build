import { NextResponse } from 'next/server';

const PRODUCT_CATALOG = new Map([
  [
    30,
    {
      sku: 'KT-LED7T8-24G-8CSJ-DX2',
      name: '7W T8 LED Tube - 2 ft, CCT Selectable',
      unitAmountCents: 26075,
      caseQty: 25,
    },
  ],
  [
    34,
    {
      sku: 'KT-LED11T8-36G-8CSJ-DX2',
      name: '11W T8 LED Tube - 3 ft, CCT Selectable',
      unitAmountCents: 26075,
      caseQty: 25,
    },
  ],
  [
    38,
    {
      sku: 'KT-LED12T8-48G-8CSJ-DX2',
      name: '12W T8 LED Tube - 4 ft, CCT Selectable',
      unitAmountCents: 27000,
      caseQty: 25,
    },
  ],
]);

type CheckoutItem = {
  id: number;
  qty: number;
};

export async function POST(request: Request) {
  try {
    const { items } = (await request.json()) as { items?: CheckoutItem[] };
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lumins-main.vercel.app';

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty.' }, { status: 400 });
    }

    const cartItems = items.map((item) => {
      const product = PRODUCT_CATALOG.get(item.id);
      const qty = Number.isInteger(item.qty) ? item.qty : 0;

      if (!product || qty < 1) {
        throw new Error('Invalid cart item.');
      }

      return { ...product, qty };
    });

    const params = new URLSearchParams();
    params.append('mode', 'payment');
    params.append('success_url', siteUrl + '/shop?order=success');
    params.append('cancel_url', siteUrl + '/shop');

    // Calculate subtotal to determine shipping rate
    const subtotalCents = cartItems.reduce((sum, item) => sum + item.unitAmountCents * item.qty, 0);
    const freeShipping = subtotalCents >= 100000; // free over $1,000

    cartItems.forEach((item, i) => {
      const label = item.name + ' - Case of ' + item.caseQty;
      params.append('line_items[' + i + '][price_data][currency]', 'usd');
      params.append('line_items[' + i + '][price_data][product_data][name]', label);
      params.append('line_items[' + i + '][price_data][product_data][metadata][sku]', item.sku);
      params.append('line_items[' + i + '][price_data][unit_amount]', String(item.unitAmountCents));
      params.append('line_items[' + i + '][quantity]', String(item.qty));
    });

    // Shipping address collection (US only)
    params.append('shipping_address_collection[allowed_countries][0]', 'US');

    // Shipping rate: free over $1,000, otherwise $15 standard (5-7 business days)
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
        Authorization: 'Bearer ' + process.env.STRIPE_SECRET_KEY,
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
