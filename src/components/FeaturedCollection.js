'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Allura } from 'next/font/google'

const allura = Allura({ subsets: ['latin'], weight: '400' })

export default function Collections() {
  const collections = [
    {
      title: 'The Essentials',
      desc: 'Minimal pieces that stay forever relevant.',
      href: '/shop/',
      img: 'https://cdnimg.brunomarc.com/brunomarcshoes/image/article/20220818_79/mens-business-casual-oxford-sneakers-03432.jpg'
    },
    {
      title: 'Street Luxe',
      desc: 'Everyday fits with a bold, luxury touch.',
      href: '/shop/',
      img: 'https://image.made-in-china.com/2f0j00piszmFtrAKgM/Women-Trousers-Fashion-Casual-Streetwear-Style-Ripped-Drawstring-Waist-Sweatpants-2021.webp'
    },
    {
      title: 'The Evening Edit',
      desc: 'Statement looks for nights that matter.',
      href: '/shop/',
      img: 'https://www.theunstitchd.com/wp-content/uploads/2022/10/Printed-Date-Night-Outfit.jpg'
    }
  ]

  return (
    <section className="relative w-full bg-white py-24">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`${allura.className} text-6xl md:text-7xl text-center text-black`}
      >
        Arden Collections
      </motion.h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid mt-16 max-w-7xl mx-auto grid-cols-3 gap-8 px-6 md:px-12">
        {collections.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.3, duration: 1 }}
            className="relative group h-[500px] overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover object-center transform group-hover:scale-105 transition duration-[2000ms]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-500"></div>
            <div className="absolute bottom-10 left-8 text-white">
              <h3 className="text-3xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-200 max-w-xs">{item.desc}</p>
              <Link
                href={item.href}
                className="mt-4 inline-block text-sm font-medium tracking-wide underline underline-offset-4 hover:text-gray-300"
              >
                Shop Now →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="md:hidden mt-16 px-6 flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 snap-x snap-mandatory">
        {collections.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.3, duration: 1 }}
            className="relative group min-w-[80%] h-[450px] snap-start overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover object-center transform group-hover:scale-105 transition duration-[2000ms]"
              sizes="80vw"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-500"></div>
            <div className="absolute bottom-8 left-6 text-white">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-200 max-w-xs">{item.desc}</p>
              <Link
                href={item.href}
                className="mt-3 inline-block text-sm font-medium tracking-wide underline underline-offset-4 hover:text-gray-300"
              >
                Shop Now →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
