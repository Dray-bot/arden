'use client'

import { Allura } from 'next/font/google'
import Link from 'next/link'

const allura = Allura({ subsets: ['latin'], weight: '400' })

export default function CancelPage() {
  return (
    <section className="bg-white py-24 min-h-screen flex flex-col items-center justify-center">
      <h1 className={`${allura.className} text-5xl text-black mb-6`}>Payment Cancelled</h1>
      <p className="text-gray-700 text-lg mb-6">Your checkout was not completed. You can try again or continue shopping.</p>
      <Link href="/shop" className="px-6 py-2 bg-black text-white rounded-full transition">
        Back to Shop
      </Link>
    </section>
  )
}
