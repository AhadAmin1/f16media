import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Magnetic from './Magnetic'

const premiumSpring = {
  type: 'spring',
  stiffness: 90,
  damping: 20,
  mass: 0.8,
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const navLinks = [
    { label: 'OUR SERVICES', href: '#services' },
    { label: 'PORTFOLIO', href: '#work' },
    { label: 'TESTIMONIALS', href: '#live-testimonials' },
    { label: 'FAQ', href: '#faq' }
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 gpu-layer"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={premiumSpring}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        
        {/* Main Pill Nav */}
        <div 
          className={`flex items-center gap-4 md:gap-10 px-4 md:px-8 py-2.5 rounded-full border transition-all duration-700 gpu-layer ${
            isScrolled || isMobileMenuOpen
              ? 'bg-[#050505]/80 backdrop-blur-lg border-white/10 shadow-lg' 
              : 'bg-white/[0.02] border-white/5'
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-black font-display text-lg transition-all group-hover:bg-cyan group-hover:scale-105">
              F
            </div>
            <span className="font-display text-sm md:text-base text-white tracking-wide">F16MEDIA</span>
          </a>

          <div className="hidden md:block h-4 w-[1px] bg-white/10" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[9px] font-bold tracking-[0.2em] text-white/30 hover:text-cyan transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div 
              className="w-full h-[1px] bg-white/40"
              animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 4 : 0 }}
            />
            <motion.div 
              className="w-full h-[1px] bg-white/40"
              animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -4 : 0 }}
            />
          </button>
        </div>

        {/* Action Button */}
        <div className="hidden sm:block gpu-layer">
          <Magnetic strength={0.2}>
            <motion.a
              href="https://calendly.com/f16mediallc/strategycall"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-2.5 bg-white text-black font-bold text-[9px] tracking-widest rounded-full hover:bg-cyan transition-all duration-500 block shadow-xl button-will-change"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={premiumSpring}
            >
              BOOK STRATEGY CALL
            </motion.a>
          </Magnetic>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 bg-[#050505]/95 backdrop-blur-lg border border-white/5 rounded-[2rem] p-8 md:hidden z-40"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs font-bold tracking-[0.3em] text-white/40 hover:text-cyan py-2 border-b border-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://calendly.com/f16mediallc/strategycall"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-8 py-4 bg-white text-black text-center font-bold text-[10px] tracking-widest rounded-full"
              >
                BOOK STRATEGY CALL
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
