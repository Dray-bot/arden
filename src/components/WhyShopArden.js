'use client'

import { motion } from 'framer-motion'
import { Allura } from 'next/font/google'
import { FiTruck, FiRotateCcw, FiStar, FiFeather } from 'react-icons/fi'

const allura = Allura({ subsets: ['latin'], weight: '400' })

const values = [
  {
    icon: <FiTruck size={36} />,
    title: 'Fast Shipping',
    desc: 'Get your order quickly with free delivery on all purchases.'
  },
  {
    icon: <FiRotateCcw size={36} />,
    title: 'Easy Returns',
    desc: 'No stress. Hassle-free 14-day returns for every order.'
  },
  {
    icon: <FiStar size={36} />,
    title: 'Premium Fabrics',
    desc: 'Only high-quality materials made to last and feel good.'
  },
  {
    icon: <FiFeather size={36} />,
    title: 'Designed for Presence',
    desc: 'Clothes that amplify individuality, not just follow trends.'
  }
]

export default function WhyShopArden() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`${allura.className} text-5xl md:text-6xl text-black mb-12`}
        >
          Why Shop Arden
        </motion.h2>

        {/* Responsive Grid for all screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all bg-white"
            >
              <div className="text-black mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black/70">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
