'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Allura } from 'next/font/google'
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'

const allura = Allura({ subsets: ['latin'], weight: '400' })

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Brand */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <span className={`${allura.className} text-4xl md:text-5xl text-black mb-4 md:mb-0`}>
            Arden
          </span>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors">Home</Link>
            <Link href="/shop" className="text-gray-700 hover:text-black transition-colors">Shop</Link>
            <Link href="/about" className="text-gray-700 hover:text-black transition-colors">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-black transition-colors">Contact</Link>
          </div>
        </div>

        {/* Social */}
        <div className="flex justify-center space-x-6 mb-8">
          <Link href="#" className="text-gray-700 hover:text-black transition-colors"><FiInstagram size={24} /></Link>
          <Link href="#" className="text-gray-700 hover:text-black transition-colors"><FiFacebook size={24} /></Link>
          <Link href="#" className="text-gray-700 hover:text-black transition-colors"><FiTwitter size={24} /></Link>
        </div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center text-gray-500 text-sm"
        >
          &copy; {new Date().getFullYear()} Arden. All rights reserved. Made by Dray
        </motion.p>
      </motion.div>
    </footer>
  )
}
