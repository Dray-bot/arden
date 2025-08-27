// /app/api/checkout/route.js
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(req) {
  try {
    const { cart } = await req.json()

    if (!cart || cart.length === 0) {
      return new Response(JSON.stringify({ error: 'Cart is empty' }), { status: 400 })
    }

    const line_items = cart.map(item => ({
      price_data: {
        currency: 'usd', // change if needed
        product_data: {
          name: item.title,
          images: [item.img],
        },
        unit_amount: item.price * 100, // Stripe expects cents
      },
      quantity: 1,
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:3000/success', // replace with your live URL in production
      cancel_url: 'http://localhost:3000/cancel',
    })

    return new Response(JSON.stringify({ url: session.url }), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Checkout session creation failed' }), { status: 500 })
  }
}
