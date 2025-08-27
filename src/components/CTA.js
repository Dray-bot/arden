'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Allura } from 'next/font/google'

const allura = Allura({ subsets: ['latin'], weight: '400' })

export default function CTA() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className={`${allura.className} text-5xl md:text-6xl mb-6 text-black`}>
          Elevate Your Wardrobe
        </h2>
        <p className="text-lg md:text-xl mb-10 font-semibold text-gray-700">
          Discover the timeless pieces of Arden. Shop now and redefine your style.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <Link
            href="/shop"
            className="px-8 py-4 rounded-full bg-black text-white font-bold tracking-wide hover:bg-gray-800 transition-all"
          >
            Shop Now
          </Link>
          <Link
            href="/newsletter"
            className="px-8 py-4 rounded-full border border-black text-black font-bold tracking-wide hover:bg-black hover:text-white transition-all"
          >
            Join Newsletter
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
