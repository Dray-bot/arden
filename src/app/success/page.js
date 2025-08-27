'use client'

import { Allura } from 'next/font/google'
import Link from 'next/link'

const allura = Allura({ subsets: ['latin'], weight: '400' })

export default function SuccessPage() {
  return (
    <section className="bg-white py-24 min-h-screen flex flex-col items-center justify-center">
      <h1 className={`${allura.className} text-5xl text-black mb-6`}>Payment Successful!</h1>
      <p className="text-gray-700 text-lg mb-6">Thank you for your purchase. Your order is being processed.</p>
      <Link href="/shop" className="px-6 py-2 bg-black text-white rounded-full transition">
        Continue Shopping
      </Link>
    </section>
  )
}
