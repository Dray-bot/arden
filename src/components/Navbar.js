'use client'

import { useState, useEffect, useContext, useRef } from 'react'
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Allura } from 'next/font/google'
import { CartContext } from '@/context/CartContext'
import { usePathname, useRouter } from 'next/navigation'

const allura = Allura({ subsets: ['latin'], weight: '400' })

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { cart } = useContext(CartContext)
  const cartItems = cart.length
  const [cartBounce, setCartBounce] = useState(false)
  const prevCartCount = useRef(cartItems)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (cartItems > prevCartCount.current) {
      setCartBounce(true)
      const t = setTimeout(() => setCartBounce(false), 400)
      return () => clearTimeout(t)
    }
    prevCartCount.current = cartItems
  }, [cartItems])

  // close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const navLinks = ['Home', 'Shop', 'About']

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className={`${allura.className} text-4xl md:text-5xl text-black tracking-wide`}>
            Arden
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center text-black text-base font-light">
          {navLinks.map(item => (
            <Link
              key={item}
              href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
              className="relative group transition-colors duration-300"
            >
              <span>{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <Link href="/cart" className="relative">
            <motion.div animate={cartBounce ? { y: [-2, -8, 0] } : {}}>
              <FiShoppingCart size={24} />
            </motion.div>
            {cartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4 text-black">
          <Link href="/cart" className="relative">
            <motion.div animate={cartBounce ? { y: [-2, -8, 0] } : {}}>
              <FiShoppingCart size={24} />
            </motion.div>
            {cartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </Link>

          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white text-black shadow-md overflow-hidden"
          >
            {['Home', 'Shop', 'About', 'Cart'].map(item => (
              <Link
                key={item}
                href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                className="block px-6 py-3 hover:bg-gray-100 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
