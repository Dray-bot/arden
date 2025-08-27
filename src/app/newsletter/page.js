'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Allura } from 'next/font/google'

const allura = Allura({ subsets: ['latin'], weight: '400' })

export default function NewsletterPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    setLoading(true)

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setSubmitted(true)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl w-full text-center"
      >
        <h1 className={`${allura.className} text-6xl mb-6 text-black`}>
          Join Our Newsletter
        </h1>
        <p className="text-gray-700 text-lg mb-10">
          Get exclusive Arden drops, early access to sales, and the latest fashion updates.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full flex-1 px-5 py-4 border border-gray-500 rounded-full text-lg text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-10 py-4 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition disabled:opacity-50"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-green-600 text-lg font-semibold mt-6"
          >
            🎉 You’re in! Check your inbox for confirmation.
          </motion.p>
        )}
      </motion.div>
    </section>
  )
}
