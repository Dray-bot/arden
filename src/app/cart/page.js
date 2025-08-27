'use client'

import { useContext, useState } from 'react'
import Image from 'next/image'
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi'
import { CartContext } from '@/context/CartContext'
import { Allura } from 'next/font/google'
import { useRouter } from 'next/navigation'

const allura = Allura({ subsets: ['latin'], weight: '400' })

export default function CartPage() {
  const { cart, setCart, removeFromCart, clearCart } = useContext(CartContext)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const updateQuantity = (id, delta) => {
    const updated = cart.map(item => {
      if (item.id === id) {
        const newQty = (item.quantity || 1) + delta
        return { ...item, quantity: newQty > 0 ? newQty : 1 }
      }
      return item
    })
    setCart(updated)
  }

  const totalPrice = cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0)

  const handleCheckout = async () => {
    if (cart.length === 0) return
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        console.error('Stripe session creation failed', data)
      }
    } catch (err) {
      console.error('Checkout error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-white py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className={`${allura.className} text-5xl text-black mb-6 flex items-center gap-3`}>
          Your Cart
          <span className="bg-black text-white text-xl font-bold px-4 py-1 rounded-full">
            {cart.length}
          </span>
        </h1>

        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-black text-lg mb-4">Your cart is empty.</p>
            <button
              onClick={() => router.push('/shop')}
              className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition font-medium"
            >
              Back to Shop
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cart.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center border rounded-xl overflow-hidden shadow-md bg-gray-50"
                >
                  <div className="relative w-28 h-28 flex-shrink-0">
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <h3 className="font-bold text-black text-lg">{item.title}</h3>
                    <p className="text-black font-semibold text-base">${item.price}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-3 py-1 bg-gray-200 text-black font-bold rounded hover:bg-gray-300 transition"
                      >
                        <FiMinus />
                      </button>
                      <span className="px-4 text-black font-bold text-lg">{item.quantity || 1}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-3 py-1 bg-gray-200 text-black font-bold rounded hover:bg-gray-300 transition"
                      >
                        <FiPlus />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-red-600 hover:text-red-800 flex items-center gap-1 font-semibold"
                      >
                        <FiTrash2 size={18} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t pt-6 gap-4">
              <p className="text-2xl font-bold text-black">
                Total: ${totalPrice.toFixed(2)}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={clearCart}
                  className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition font-bold"
                >
                  Clear Cart
                </button>
                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition font-bold"
                >
                  {loading ? 'Redirecting...' : 'Checkout'}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
