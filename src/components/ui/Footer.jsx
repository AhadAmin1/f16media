import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,240,255,0.02)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20 md:mb-24">
          
          {/* Brand & Mission */}
          <motion.div 
            className="space-y-6 md:space-y-8 gpu-layer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center font-display text-black font-bold text-lg">F</div>
              <span className="font-display text-xl text-white tracking-tight uppercase">F16Media</span>
            </div>
            <p className="text-white/20 font-light leading-relaxed max-w-xs text-[13px]">
              World-class digital growth engine for home service businesses. Taking your brand to the next level with precision engineering.
            </p>
          </motion.div>

          {/* Locations */}
          <motion.div 
            className="gpu-layer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-[9px] font-bold tracking-[0.4em] uppercase text-cyan/60 mb-6 md:mb-8">Base of Operations</h4>
            <div className="space-y-6">
              <div>
                <div className="text-[8px] font-bold text-white/10 uppercase tracking-widest mb-2">United States</div>
                <p className="text-[11px] text-white/30 leading-relaxed font-light">
                  30 N Gould St Ste R, <br/>Sheridan, WY 82801
                </p>
              </div>
              <div>
                <div className="text-[8px] font-bold text-white/10 uppercase tracking-widest mb-2">Global Comms</div>
                <p className="text-[11px] text-white/30 leading-relaxed font-light">
                  Remote Operations Center <br/>Available 24/7
                </p>
              </div>
            </div>
          </motion.div>

          {/* Comms */}
          <motion.div 
            className="gpu-layer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-[9px] font-bold tracking-[0.4em] uppercase text-white/10 mb-6 md:mb-8">Communications</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:f16mediallc@gmail.com" className="text-xs text-white/30 hover:text-cyan transition-colors duration-300">
                  f16mediallc@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+13205924870" className="text-xs text-white/30 hover:text-cyan transition-colors duration-300">
                  (320) 592-4870
                </a>
              </li>
              <li>
                <a href="tel:+923159983776" className="text-xs text-white/30 hover:text-cyan transition-colors duration-300">
                  +92 315 9983776
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div 
            className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.01] gpu-layer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-[9px] font-bold tracking-[0.4em] uppercase text-white/20 mb-6">Social Grid</h4>
            <div className="flex flex-wrap gap-4">
              {['Instagram', 'LinkedIn', 'Facebook', 'YouTube'].map(social => (
                <a key={social} href="#" className="text-[8px] font-bold tracking-[0.2em] text-white/10 hover:text-cyan transition-colors">
                  {social}
                </a>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-white/5">
              <a 
                href="#contact"
                className="text-[9px] font-bold tracking-widest text-cyan/60 flex items-center gap-2 group"
              >
                BOOK CALL <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-10 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="text-[8px] font-mono text-white/10 uppercase tracking-[0.4em] text-center md:text-left">
            © {currentYear} F16 Media LLC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8">
             <span className="text-[8px] font-mono text-white/5 uppercase tracking-[0.2em]">Privacy Protocol</span>
             <span className="text-[8px] font-mono text-white/5 uppercase tracking-[0.2em]">Secure Access</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
