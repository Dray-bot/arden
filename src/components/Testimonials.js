'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Allura } from 'next/font/google'
import Image from 'next/image'

const allura = Allura({ subsets: ['latin'], weight: '400' })

const testimonials = [
  {
    name: 'Sophia M.',
    text: 'Arden pieces are timeless. I wear them everywhere and always feel confident.',
    image: 'https://www.jacksonlewis.com/sites/default/files/styles/bio_mobile/public/2024-04/Czerniecki_Sophia_Philadelphia_2048x756_b.png.webp?itok=DhEWaQJi',
  },
  {
    name: 'James L.',
    text: 'Finally clothes that fit my style without screaming trends. Arden is different.',
    image: 'https://www.hahnlaw.com/wp-content/uploads/2021/09/Holloway-square.png',
  },
  {
    name: 'Elena K.',
    text: 'The quality is unmatched. Every detail feels intentional.',
    image: 'https://www.bravomodels.net/bravo_cms/wp-content/uploads/2021/08/2022-04-19-13.18.13.jpg',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white px-6 md:px-12">
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
              <Image
                src={t.image}
                alt={t.name}
                width={80}
                height={80}
                className="rounded-full object-cover mb-4"
              />
              <p className="text-gray-700 italic text-center">&quot;{t.text}&quot;</p>
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
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover mb-4"
                  />
                  <p className="text-gray-700 italic text-center">&quot;{t.text}&quot;</p>
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
