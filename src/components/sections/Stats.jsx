import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const premiumSpring = {
  type: 'spring',
  stiffness: 90,
  damping: 20,
  mass: 0.8,
}

const STATS = [
  { value: 250, suffix: '+', label: 'HAPPY CLIENTS', desc: 'Trusting our growth engine.' },
  { value: 200, suffix: '%', label: 'ROI DELIVERED', desc: 'Consistent performance.' },
  { value: 230, suffix: '+', label: 'PROJECTS DELIVERED', desc: 'Successful deployments.' },
  { value: 1, suffix: 'M+', label: 'MONEY INVESTED', desc: 'Invested for maximum return.' },
]

const TESTIMONIALS = [
  {
    text: "Super & Reliable Service",
    name: 'James W. Turner',
    role: 'Air Duct Cleaning Owner',
    init: 'JT'
  },
  {
    text: "Super & Reliable Service",
    name: 'Samantha L. Davis',
    role: 'Home Service Company Owner',
    init: 'SD'
  },
  {
    text: "Fully satisfied with F16 Media's service",
    name: 'Michael T. Clark',
    role: 'HVAC Business Owner',
    init: 'MC'
  },
  {
    text: "Best Service I’ve Ever Got",
    name: 'Jessica P. Martinez',
    role: 'Cleaning Service Owner',
    init: 'JM'
  }
]

function CountUp({ value, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const startTime = performance.now()

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(value)
    }

    requestAnimationFrame(tick)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="relative py-24 md:py-40 bg-[#050505] overflow-hidden gpu-layer" id="proof">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-24 md:mb-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center group gpu-layer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: premiumSpring }
              }}
            >
              <div className="font-display text-5xl md:text-8xl text-white mb-2 md:mb-4 group-hover:text-cyan transition-colors duration-500">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[9px] font-bold tracking-[0.4em] text-white/20 uppercase mb-2">
                {stat.label}
              </div>
              <div className="text-[10px] text-white/10 font-light md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Title */}
        <motion.div 
          className="text-center mb-16 md:mb-24 gpu-layer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ ...premiumSpring }}
        >
          <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-cyan/40 mb-6 block">
            Success Stories
          </span>
          <h2 className="font-display text-4xl md:text-9xl text-white tracking-tighter">
            CLIENT <span className="text-white/20 italic">VOICES.</span>
          </h2>
        </motion.div>

        {/* Testimonials Cards */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
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
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className="p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-700 relative overflow-hidden group gpu-layer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: premiumSpring }
              }}
            >
              <div className="font-display text-6xl md:text-9xl text-white/[0.01] absolute -top-4 -left-2 select-none group-hover:text-cyan/[0.03] transition-colors duration-700 leading-none">
                "
              </div>
              <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed mb-8 md:mb-10 relative z-10 italic">
                {t.text}
              </p>
              <div className="flex items-center gap-6 border-t border-white/5 pt-8">
                <motion.div 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/[0.02] flex items-center justify-center font-display text-xl md:text-2xl text-white/40"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {t.init}
                </motion.div>
                <div>
                  <div className="text-white/80 font-bold tracking-wide text-sm md:text-base">{t.name}</div>
                  <div className="text-white/20 text-[9px] font-bold tracking-widest uppercase mt-1">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
