import { motion } from 'framer-motion'

const premiumSpring = {
  type: 'spring',
  stiffness: 90,
  damping: 20,
  mass: 0.8,
}

export default function Mission() {
  const BRIEFING = [
    {
      code: 'MISSION_01',
      title: 'OUR MISSION',
      desc: 'At F16Media LLC, our mission is to empower home improvement businesses by delivering high-quality digital marketing solutions. We leverage the latest technologies and innovative strategies to help our clients generate leads, build brand presence, and achieve long-term success.',
      data: 'Growth Focus'
    },
    {
      code: 'MISSION_02',
      title: 'OUR VISION',
      desc: 'To be the go-to digital marketing partner for home improvement businesses, known for excellence, creativity, and results-driven solutions. We strive to revolutionize how businesses engage with their customers through innovative web solutions.',
      data: 'Innovation'
    },
    {
      code: 'MISSION_03',
      title: 'OUR VALUES',
      desc: 'We hold integrity, creativity, and client success at the core of everything we do. We believe in building transparent, collaborative relationships with our clients, focusing on their specific needs and goals.',
      data: 'Accountability'
    }
  ]

  return (
    <section className="relative py-24 md:py-40 bg-[#050505] overflow-hidden" id="mission">
      {/* Background HUD Grid */}
      <div className="absolute inset-0 hud-grid opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* Left - Mission Narrative */}
          <motion.div
            className="gpu-layer"
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ ...premiumSpring }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-cyan/20" />
              <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-cyan/40">The Mission Profile</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-8xl text-white tracking-tight leading-[0.85] mb-12">
              BEYOND <br/><span className="text-white/20 italic">AGENCY.</span>
            </h2>
            
            <div className="space-y-8 text-lg md:text-xl text-white/40 leading-relaxed font-light max-w-lg mb-16">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...premiumSpring, delay: 0.3 }}
              >
                At F16Media LLC, our mission is to empower home improvement businesses by delivering high-quality digital marketing solutions. We leverage the latest technologies and innovative strategies to help our clients generate leads, build brand presence, and achieve long-term success in a competitive market.
              </motion.p>
            </div>

            <motion.div 
              className="grid grid-cols-2 gap-8 md:gap-12 pt-12 border-t border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...premiumSpring, delay: 0.5 }}
            >
              <div>
                <div className="text-[9px] font-bold tracking-widest text-white/10 uppercase mb-4">EXPERIENCE</div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
                  <span className="text-white/60 font-mono text-[10px] md:text-xs">10 YEARS OF EXPERTISE</span>
                </div>
              </div>
              <div>
                <div className="text-[9px] font-bold tracking-widest text-white/10 uppercase mb-4">STATUS</div>
                <div className="text-white/60 font-mono text-[10px] md:text-xs">ACTIVE // RESULTS-DRIVEN</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Briefing Cards */}
          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            {BRIEFING.map((item, i) => (
              <motion.div
                key={item.code}
                className="group relative p-6 md:p-8 rounded-[2rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-cyan/20 transition-all duration-700 overflow-hidden gpu-layer"
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0, transition: premiumSpring }
                }}
              >
                <div className="absolute top-8 right-8 text-[8px] font-mono text-white/5 group-hover:text-cyan/20 transition-colors">
                  {item.code}
                </div>

                <div className="flex gap-6 md:gap-8">
                  <div className="w-[1px] h-20 md:h-24 bg-white/5 group-hover:bg-cyan/20 transition-all duration-700" />
                  <div>
                    <h4 className="font-display text-xl md:text-2xl text-white mb-3 md:mb-4 tracking-wide group-hover:text-cyan transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-white/30 font-light leading-relaxed text-sm mb-6 max-w-sm">
                      {item.desc}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="text-[9px] font-bold tracking-widest text-white/10 uppercase">Status Report</div>
                      <div className="text-[10px] font-mono text-cyan/60">{item.data}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
