import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const premiumSpring = {
  type: 'spring',
  stiffness: 90,
  damping: 20,
  mass: 0.8,
}

export default function ThreePortfolio() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Horizontal scroll transform for desktop
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-330%"])

  const MISSIONS = [
    {
      id: 1,
      title: "55 leads GENERATED",
      category: "AIR DUCT CLEANING",
      leads: "55",
      roi: "$2.98 / Lead",
      image: "https://images.unsplash.com/photo-1603716896884-6d4f0a7a8a?q=85&w=1200",
      color: "from-cyan/20"
    },
    {
      id: 2,
      title: "551 leads GENERATED",
      category: "HVAC DOMINATION",
      leads: "551",
      roi: "$8.93 / Lead",
      image: "https://images.unsplash.com/photo-1559063969-4f1b6b6c5d1?q=85&w=1200",
      color: "from-purple/20"
    },
    {
      id: 3,
      title: "252 leads GENERATED",
      category: "LEAD GENERATION",
      leads: "252",
      roi: "$12.73 / Lead",
      image: "https://images.unsplash.com/photo-1560472354-9e3d8b4a5d1?q=85&w=1200",
      color: "from-orange/20"
    },
    {
      id: 4,
      title: "159 leads GENERATED",
      category: "FB ADS ATTACK",
      leads: "159",
      roi: "$13.10 / Lead",
      image: "https://images.unsplash.com/photo-1558628036-8f46d8c6d5d1?q=85&w=1200",
      color: "from-cyan/20"
    },
    {
      id: 5,
      title: "21 leads GENERATED",
      category: "LOCAL SERVICE ADS",
      leads: "21",
      roi: "$5.03 / Lead",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=85&w=1200",
      color: "from-blue/20"
    },
    {
      id: 6,
      title: "47 leads GENERATED",
      category: "GOOGLE ADS",
      leads: "47",
      roi: "$5 / Lead",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=85&w=1200",
      color: "from-green/20"
    }
  ]

  return (
    <section ref={targetRef} className="relative md:h-[400vh] bg-[#050505]" id="work">
      {/* Desktop Horizontal Scroll Layout */}
      <div className="hidden md:block sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 hud-grid opacity-[0.02] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 z-0" />
        
        <motion.div style={{ x }} className="flex gap-16 px-24 relative z-10 gpu-layer">
          {/* Mission Briefing Header */}
          <div className="flex-shrink-0 w-[600px] flex flex-col justify-center gpu-layer">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-cyan/20" />
              <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-cyan/40">Operation History</span>
            </div>
            <h2 className="font-display text-9xl text-white tracking-tighter leading-[0.8] mb-12">
              OUR <br/><span className="text-white/20">WORK</span> <br/>RECORDS<span className="text-cyan">.</span>
            </h2>
            <p className="text-white/30 font-light text-xl leading-relaxed max-w-md">
              We execute surgical strikes on market share. Swipe to view real-time engagement results from our active missions.
            </p>
          </div>

          {/* Cards */}
          {MISSIONS.map((mission) => (
            <div key={mission.id} className="flex-shrink-0 w-[700px] h-[70vh] group relative rounded-[3rem] overflow-hidden border border-white/5 bg-white/[0.01] gpu-layer">
              <div className="absolute inset-0 z-0">
                <img src={mission.image} alt={mission.title} className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-all duration-1000 ease-out" />
                <div className={`absolute inset-0 bg-gradient-to-t ${mission.color} to-black/90 z-10`} />
              </div>
              <div className="relative z-20 h-full p-16 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[9px] font-bold tracking-[0.3em] text-cyan/60 uppercase bg-cyan/5 px-4 py-2 rounded-full border border-cyan/10">{mission.category}</span>
                    <span className="text-[8px] font-mono text-white/10 uppercase tracking-widest">MISSION_{mission.id}</span>
                  </div>
                  <h3 className="font-display text-7xl text-white mb-6 group-hover:text-cyan transition-colors duration-700 leading-none">{mission.title}</h3>
                </div>
                <div className="flex gap-12 items-end">
                  <div>
                    <div className="text-[9px] font-bold tracking-widest text-white/20 uppercase mb-2">Acquisition</div>
                    <div className="text-white text-7xl font-display group-hover:text-cyan transition-colors leading-none">{mission.leads}</div>
                  </div>
                  <div className="h-16 w-[1px] bg-white/5 mb-2" />
                  <div>
                    <div className="text-[9px] font-bold tracking-widest text-white/20 uppercase mb-2">Efficiency</div>
                    <div className="text-white text-5xl font-display group-hover:text-cyan transition-colors leading-none">{mission.roi}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="flex-shrink-0 w-[500px] flex flex-col justify-center items-center text-center gpu-layer">
            <h3 className="font-display text-5xl text-white mb-8 uppercase tracking-tighter">READY FOR MISSION?</h3>
            <a href="#contact" className="px-12 py-5 bg-white text-black font-bold tracking-[0.2em] text-[10px] rounded-full hover:bg-cyan transition-all">REQUEST BRIEFING</a>
          </div>
        </motion.div>
      </div>

      {/* Mobile Vertical Layout */}
      <div className="md:hidden py-24 px-6 relative">
        <div className="absolute inset-0 hud-grid opacity-[0.02] pointer-events-none" />
        <div className="mb-16">
          <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-cyan/40 mb-6 block">Operation History</span>
          <h2 className="font-display text-5xl text-white tracking-tighter leading-[0.85] mb-8">
            OUR <br/><span className="text-white/20">WORK</span> <br/>RECORDS<span className="text-cyan">.</span>
          </h2>
          <p className="text-white/30 font-light text-base leading-relaxed">
            We execute surgical strikes on market share. View real-time engagement results below.
          </p>
        </div>

        <div className="space-y-8">
          {MISSIONS.map((mission, i) => (
            <motion.div 
              key={mission.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ ...premiumSpring, delay: i * 0.1 }}
              className="w-full aspect-[4/5] relative rounded-[2rem] overflow-hidden border border-white/5 bg-white/[0.01] gpu-layer"
            >
              <div className="absolute inset-0 z-0">
                <img src={mission.image} alt={mission.title} className="w-full h-full object-cover opacity-20" />
                <div className={`absolute inset-0 bg-gradient-to-t ${mission.color} to-black/95 z-10`} />
              </div>
              <div className="relative z-20 h-full p-8 flex flex-col justify-between">
                <div>
                  <div className="text-[8px] font-bold tracking-[0.3em] text-cyan/60 uppercase mb-4">{mission.category}</div>
                  <h3 className="font-display text-4xl text-white leading-none">{mission.title}</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="text-[8px] font-bold tracking-widest text-white/20 uppercase mb-1">Acquisition</div>
                    <div className="text-white text-5xl font-display">{mission.leads}</div>
                  </div>
                  <div>
                    <div className="text-[8px] font-bold tracking-widest text-white/20 uppercase mb-1">Efficiency</div>
                    <div className="text-white text-3xl font-display">{mission.roi}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center border-t border-white/5 pt-16">
          <h3 className="font-display text-4xl text-white mb-8">READY?</h3>
          <a href="#contact" className="px-10 py-4 bg-white text-black font-bold tracking-widest text-[9px] rounded-full block text-center uppercase">Request Briefing</a>
        </div>
      </div>
    </section>
  )
}
