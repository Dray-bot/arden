'use client'

import { motion } from 'framer-motion'
import { Allura } from 'next/font/google'
import Link from 'next/link'

const allura = Allura({ subsets: ['latin'], weight: '400' })

export default function MessageSent() {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center max-w-lg"
      >
        <h1 className={`${allura.className} text-6xl text-black mb-6`}>
          Message Sent!
        </h1>
        <p className="text-gray-700 text-lg mb-10">
          Thank you for reaching out. We’ve received your message and will get back to you shortly.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link
            href="/"
            className="px-8 py-4 rounded-full bg-black text-white font-bold tracking-wide hover:bg-gray-800 transition-all"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
