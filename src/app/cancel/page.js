'use client'

import { Allura } from 'next/font/google'
import Link from 'next/link'
import { motion } from 'framer-motion'

const allura = Allura({ subsets: ['latin'], weight: '400' })

export default function CancelPage() {
  return (
    <section className="bg-white py-24 min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`${allura.className} text-6xl text-red-600 mb-6`}
      >
        Payment Canceled
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-gray-700 text-lg mb-8 max-w-xl"
      >
        Your payment was canceled. No charges were made. You can return to your cart and try again.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Link
          href="/cart"
          className="px-8 py-3 bg-black text-white rounded-full text-lg hover:bg-gray-800 transition"
        >
          Back to Cart
        </Link>
      </motion.div>
    </section>
  )
}
