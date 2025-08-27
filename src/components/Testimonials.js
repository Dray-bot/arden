'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Allura } from 'next/font/google'

const allura = Allura({ subsets: ['latin'], weight: '400' })

const testimonials = [
  {
    name: 'Sophia M.',
    text: 'Arden pieces are timeless. I wear them everywhere and always feel confident.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'James L.',
    text: 'Finally clothes that fit my style without screaming trends. Arden is different.',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    name: 'Elena K.',
    text: 'The quality is unmatched. Every detail feels intentional.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white px-6 md:px-12">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`${allura.className} text-5xl md:text-6xl text-center text-black mb-14`}
      >
        What People Say
      </motion.h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl shadow-sm"
          >
            <div className="flex flex-col items-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <p className="text-gray-700 italic text-center">"{t.text}"</p>
              <span className="mt-4 font-bold text-black">{t.name}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Swiper Carousel */}
      <div className="md:hidden max-w-md mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover mb-4"
                  />
                  <p className="text-gray-700 italic text-center">"{t.text}"</p>
                  <span className="mt-4 font-bold text-black">{t.name}</span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
