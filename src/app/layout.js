import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar" 
import Footer from "@/components/Footer"
import { CartProvider } from "@/context/CartContext"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Arden",
  description: "Arden Fashion Store",
  icons: {
    icon: "/img/arden-logo.png",  
    shortcut: "/img/arden-logo.png",
    apple: "/img/arden-logo.png",
  },
  openGraph: {
    title: "Arden",
    description: "Timeless fashion for every style",
    images: ["/img/arden-logo.png"],  // shown when link is shared
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

