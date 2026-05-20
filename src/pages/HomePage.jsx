import { useScrollReveal } from '../hooks/useScrollReveal'
import Hero from '../components/Hero'
import BrandStrip from '../components/BrandStrip'
import FeaturedProperties from '../components/FeaturedProperties'
import About from '../components/About'
import Services from '../components/Services'
import PropertyListings from '../components/PropertyListings'
import Banner from '../components/Banner'
import Testimonials from '../components/Testimonials'
import Blog from '../components/Blog'

export default function HomePage() {
  useScrollReveal()

  return (
    <>
      <Hero />
      <BrandStrip />
      <FeaturedProperties />
      <About />
      <Services />
      <PropertyListings />
      <Banner />
      <Testimonials />
      <Blog />
    </>
  )
}
