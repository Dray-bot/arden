'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Allura } from 'next/font/google'

const allura = Allura({ subsets: ['latin'], weight: '400' })

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [showToast, setShowToast] = useState(null) // success or error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    })

    setLoading(false)

    if (res.ok) {
      setShowToast("success")
      e.target.reset()
    } else {
      setShowToast("error")
    }

    setTimeout(() => setShowToast(null), 3000)
  }

  return (
    <section className="py-20 px-6 bg-white min-h-screen flex items-center justify-center relative">
      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl shadow-lg font-semibold z-50 ${
              showToast === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
            }`}
          >
            {showToast === "success" ? "✅ Message sent!" : "❌ Something went wrong"}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-3xl"
      >
        <h2 className={`${allura.className} text-5xl mb-10 text-center text-black`}>
          Contact Arden
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-5 py-4 bg-gray-100 border border-gray-300 rounded-xl text-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-5 py-4 bg-gray-100 border border-gray-300 rounded-xl text-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Type your message..."
              required
              className="w-full px-5 py-4 bg-gray-100 border border-gray-300 rounded-xl text-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="w-full py-4 px-8 bg-black text-white font-bold rounded-full text-lg hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
}
