import Hero from "@/components/Hero"
import FeaturedCollection from "@/components/FeaturedCollection"
import WhyShopArden from "@/components/WhyShopArden"
import Testimonials from "@/components/Testimonials"
import CTA from "@/components/CTA"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <FeaturedCollection />
      <WhyShopArden />
      <Testimonials />
      <CTA />
    </main>
  )
}
