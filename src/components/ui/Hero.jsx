import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import Magnetic from './Magnetic'

const premiumSpring = {
  type: 'spring',
  stiffness: 90,
  damping: 20,
  mass: 0.7,
}

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const opacityScroll = useTransform(scrollY, [0, 300], [1, 0])
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0 gpu-layer hero-will-change"
        style={{ y: y1 }}
      >
        <img 
          src="/f16_jet_night_cinematic_1778366521118.webp" 
          alt="F16 Background" 
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      </motion.div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none" />
      <div className="scanline" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Text Column */}
          <motion.div
            className="gpu-layer hero-will-change"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...premiumSpring, delay: 0.2 }}
          >
            <motion.div 
              className="inline-flex items-center md:mt-60 lg:mt-20  gap-3 mb-6 md:mb-8 px-4 py-2 rounded-full border border-cyan/20 bg-cyan/5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...premiumSpring, delay: 0.4 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
              <span className="text-[9px] font-bold tracking-[0.4em] text-cyan uppercase">F16Media LLC | Taking Off your Business like an F16</span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-7xl lg:text-[7rem] text-white leading-[0.85] tracking-tighter mb-8 md:mb-10">
              {["TRANSFORMING", "IDEAS", "INTO", "DIGITAL", "SUCCESS."].map((word, i) => (
                <motion.span 
                  key={i} 
                  className="inline-block mr-2 md:mr-4 gpu-layer hero-will-change"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ...premiumSpring, delay: 0.6 + i * 0.1 }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p 
              className="text-base md:text-lg text-white/40 font-light leading-relaxed max-w-lg mb-10 md:mb-12 border-l border-cyan/10 pl-6 md:pl-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...premiumSpring, delay: 1 }}
            >
              Discover F16Media LLC – a top-rated creative web agency offering expert web design, digital marketing, branding, and lead generation services to grow your business.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Magnetic strength={0.2}>
                <motion.a
                  href="https://calendly.com/f16mediallc/strategycall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 md:px-10 py-4 md:py-5 bg-[#00f0ff] text-black font-bold tracking-[0.2em] text-[10px] rounded-full hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-500 text-center block button-will-change"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  BOOK STRATEGY CALL
                </motion.a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <motion.a
                  href="#services"
                  className="px-8 md:px-10 py-4 md:py-5 border border-white/10 text-white font-bold tracking-[0.2em] text-[10px] rounded-full hover:bg-white/5 transition-all duration-500 text-center block button-will-change"
                  whileHover={{ scale: 1.02 }}
                >
                  OUR SERVICES
                </motion.a>
              </Magnetic>
            </div>
          </motion.div>

          {/* Stats Column */}
          <motion.div
            className="hidden md:block relative gpu-layer hero-will-change"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...premiumSpring, delay: 1.2 }}
          >
            <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
              
              <div className="space-y-8 md:space-y-12">
                {[
                  { label: 'CPL REDUCTION', value: '-42%', sub: '2024 active campaigns' },
                  { label: 'LEAD VELOCITY', value: '3.5X', sub: 'Booking speed increase' },
                  { label: 'MARKET DOMINANCE', value: 'TOP 1%', sub: 'Search positioning' }
                ].map((stat, i) => (
                  <div key={i} className="relative gpu-layer">
                    <div className="text-[9px] font-bold tracking-[0.4em] text-white/20 uppercase mb-3">{stat.label}</div>
                    <div className="text-4xl md:text-5xl font-display text-white transition-colors duration-700">{stat.value}</div>
                    <div className="text-[10px] text-white/20 font-light mt-1 italic">{stat.sub}</div>
                  </div>
                ))}
              </div>

              {/* Decorative HUD Elements */}
              <div className="absolute bottom-8 right-8 flex gap-2 opacity-20">
                <div className="w-[1px] h-10 bg-white/40" />
                <div className="w-[1px] h-6 bg-white/40 mt-4" />
                <div className="w-[1px] h-14 bg-cyan/60 mt-[-4px]" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/10"
        style={{ opacity: opacityScroll }}
      >
        <span className="text-[8px] font-bold tracking-[0.5em] uppercase">Engage Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-cyan/20 to-transparent" />
      </motion.div>
    </section>
  )
}
