'use client'

import { Allura } from 'next/font/google'
import Link from 'next/link'
import { motion } from 'framer-motion'

const allura = Allura({ subsets: ['latin'], weight: '400' })

export default function SuccessPage() {
  return (
    <section className="bg-white py-24 min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`${allura.className} text-6xl text-green-600 mb-6`}
      >
        Payment Successful
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-gray-700 text-lg mb-8 max-w-xl"
      >
        Thank you for your purchase. Your order is being processed and you’ll receive an update soon.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Link
          href="/shop"
          className="px-8 py-3 bg-black text-white rounded-full text-lg hover:bg-gray-800 transition"
        >
          Continue Shopping
        </Link>
      </motion.div>
    </section>
  )
}
