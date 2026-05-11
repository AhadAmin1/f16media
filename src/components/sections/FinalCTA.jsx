import { motion } from 'framer-motion'

const premiumSpring = {
  type: 'spring',
  stiffness: 90,
  damping: 20,
  mass: 0.8,
}

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-40 bg-[#050505] overflow-hidden" id="contact">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.02)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="bg-white/[0.01] border border-white/5 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-24 relative overflow-hidden group gpu-layer"
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={premiumSpring}
        >
          {/* Decorative Corner Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan/5 blur-[40px] rounded-full group-hover:bg-cyan/10 transition-all duration-1000" />
          
          <div className="max-w-3xl">
            <motion.span 
              className="text-[9px] font-bold tracking-[0.4em] uppercase text-cyan/40 mb-8 block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Direct Access
            </motion.span>
            <motion.h2 
              className="font-display text-4xl md:text-8xl text-white tracking-tight leading-[0.9] mb-8 md:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Transforming Ideas <br/><span className="text-white/20 italic">into Digital Success.</span>
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-white/30 font-light leading-relaxed mb-12 md:mb-16 max-w-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              At F16Media LLC, our mission is to empower home improvement businesses by delivering high-quality digital marketing solutions. Schedule a call to get started.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
              <div>
                <div className="text-[9px] font-bold tracking-widest text-white/10 uppercase mb-3 md:mb-4">Email Control</div>
                <a href="mailto:f16mediallc@gmail.com" className="text-lg md:text-2xl text-white/80 hover:text-cyan transition-colors font-medium break-all">
                  f16mediallc@gmail.com
                </a>
              </div>
              <div>
                <div className="text-[9px] font-bold tracking-widest text-white/10 uppercase mb-3 md:mb-4">Voice Comms</div>
                <div className="space-y-2">
                  <a href="tel:3205924870" className="block text-lg md:text-2xl text-white/80 hover:text-cyan transition-colors font-medium">
                    (320) 592-4870
                  </a>
                  <a href="tel:+923159983776" className="block text-lg md:text-2xl text-white/80 hover:text-cyan transition-colors font-medium">
                    +92 315 9983776
                  </a>
                </div>
              </div>
            </div>

            <motion.a
              href="https://calendly.com/f16mediallc/strategycall"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-6 px-10 md:px-12 py-5 md:py-6 bg-white text-black font-bold tracking-[0.2em] text-[10px] rounded-full hover:bg-[#00f0ff] transition-all duration-500 shadow-lg w-full sm:w-auto button-will-change"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={premiumSpring}
            >
              <span>BOOK STRATEGY CALL</span>
              <span className="text-xl">→</span>
            </motion.a>
          </div>

          {/* Bottom Branding */}
          <div className="mt-16 md:mt-24 pt-10 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="font-display text-2xl text-white/5 group-hover:text-white/10 transition-colors">
              F16MEDIA <span className="text-sm font-label tracking-[0.3em] ml-2">LLC</span>
            </div>
            <div className="flex flex-wrap gap-6 md:gap-8">
              {['INSTAGRAM', 'LINKEDIN', 'FACEBOOK', 'YOUTUBE'].map(social => (
                <a key={social} href="#" className="text-[9px] font-bold tracking-widest text-white/10 hover:text-white/40 transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
