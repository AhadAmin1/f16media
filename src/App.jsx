import { motion } from 'framer-motion'
import ScrollProvider from './components/ui/ScrollProvider'
import CustomCursor from './components/CustomCursor'
import Background from './components/ui/Background'
import PageLoader from './components/ui/PageLoader'
import Header from './components/ui/Header'
import Hero from './components/ui/Hero'
import Services from './components/ui/Services'
import Stats from './components/sections/Stats'
import Mission from './components/ui/Mission'
import LiveTestimonials from './components/sections/LiveTestimonials'
import LiveResults from './components/sections/LiveResults'
import ThreePortfolio from './components/ui/ThreePortfolio'
import FinalCTA from './components/sections/FinalCTA'
import Footer from './components/ui/Footer'
import WhyChooseUs from './components/sections/WhyChooseUs'
import HowItWorks from './components/sections/HowItWorks'
import FAQ from './components/sections/FAQ'
import BackToTop from './components/ui/BackToTop'
import SectionWrapper from './components/ui/SectionWrapper'

export default function App() {
  return (
    <>
      <PageLoader />
      <BackToTop />
      <CustomCursor />
      <Background />
      <Header />

      <main className="relative z-10">
        <Hero />
        
        <SectionWrapper>
          <Mission />
        </SectionWrapper>

        <SectionWrapper>
          <Services />
        </SectionWrapper>

        <SectionWrapper>
          <HowItWorks />
        </SectionWrapper>

        <SectionWrapper>
          <WhyChooseUs />
        </SectionWrapper>

        <SectionWrapper>
          <Stats />
        </SectionWrapper>

        <SectionWrapper>
          <LiveTestimonials />
        </SectionWrapper>

        <SectionWrapper>
          <LiveResults />
        </SectionWrapper>

        <ThreePortfolio />

        <SectionWrapper>
          <FAQ />
        </SectionWrapper>

        <SectionWrapper>
          <FinalCTA />
        </SectionWrapper>

        <Footer />
      </main>
    </>
  )
}
