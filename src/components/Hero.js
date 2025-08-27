'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Allura, Cedarville_Cursive } from 'next/font/google'
import { useRef } from 'react'

// Load fonts
const allura = Allura({ subsets: ['latin'], weight: '400' })
const cedarville = Cedarville_Cursive({ subsets: ['latin'], weight: '400' })

export default function Hero() {
  const ref = useRef(null)
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Parallax effect
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section ref={ref} className="relative h-[80vh] md:h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 will-change-transform"
      >
        <picture>
          {/* Desktop image */}
          <source
            media="(min-width: 768px)"
            srcSet="https://www.apetogentleman.com/wp-content/uploads/2024/09/highest-quality-main.jpg"
          />
          {/* Mobile image */}
          <Image
            src="https://www.weatherproofvintage.com/cdn/shop/files/short-sleeve-aztec-dobby-shirt-azure-blue-lightweight-cotton-classic-fit-men.jpg?crop=center&height=1214&v=1750451606&width=1012"
            alt="Arden Campaign"
            fill
            className="w-full h-full object-cover object-center"
            sizes="100vw"
          />
        </picture>
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`${allura.className} text-6xl md:text-8xl tracking-wide`}
        >
          Arden
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: 'easeOut' }}
          className="mt-4 text-lg md:text-2xl text-gray-100 max-w-2xl"
        >
          Clothes designed for presence, not trends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/shop"
            className="px-8 py-3 rounded-full bg-white text-black font-medium tracking-wide hover:bg-gray-200 transition-all"
          >
            Explore Collection
          </Link>
          <Link
            href="/about"
            className="px-8 py-3 rounded-full border border-white text-white font-medium tracking-wide hover:bg-white hover:text-black transition-all"
          >
            Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
