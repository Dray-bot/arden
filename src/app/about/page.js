'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Allura } from 'next/font/google'

const allura = Allura({ subsets: ['latin'], weight: '400' })

export default function About() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="overflow-hidden rounded-2xl shadow-lg relative w-full h-[500px] md:h-[600px]"
        >
          <Image
            src="https://www.fashionbeans.com/wp-content/uploads/2024/03/LucaFaloni3_SmartCastualOutfits.jpg"
            alt="About Arden"
            fill
            className="object-cover"
            style={{ objectPosition: 'center' }}
            priority
          />
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="text-gray-900"
        >
          <h2 className={`${allura.className} text-5xl md:text-6xl mb-6`}>
            Our Story
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-800">
            Arden was created for people who see clothing as presence, not as a trend cycle.  
            Our collections are built on timeless shapes, fabrics that last, and cuts that adapt to your lifestyle.  
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-800">
            Every piece is designed to make you feel confident without effort.  
            We strip away noise and focus on details that matter: fit, texture, movement.  
            Arden isn’t seasonal fashion—it’s a uniform for people who lead with individuality.  
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-800">
            From the beginning, our mission has been simple: design clothing you’ll return to, year after year.  
            No hype, no excess, only presence.
          </p>
        </motion.div>
      </div>

      {/* Signature Line */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        className="mt-20 text-center"
      >
        <p className={`${allura.className} text-4xl md:text-5xl text-gray-900`}>
          Arden is presence.
        </p>
      </motion.div>
    </section>
  )
}
