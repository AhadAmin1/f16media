import { motion } from 'framer-motion'

const premiumSpring = {
  type: 'spring',
  stiffness: 90,
  damping: 20,
  mass: 0.8,
}

export default function HowItWorks() {
  const STEPS = [
    {
      id: '01',
      title: 'SPECIALIZED FOCUS',
      desc: 'At F16MEDIA LLC, we specialize in home improvement businesses, using proven strategies to deliver results, with a focus on transparent reporting.',
      data: 'STATUS: FOCUSED'
    },
    {
      id: '02',
      title: 'SERVICE QUALITY',
      desc: 'We continually optimize campaigns with the latest trends and custom strategies to guarantee high-quality results tailored to each client\'s needs.',
      data: 'STATUS: OPTIMIZED'
    },
    {
      id: '03',
      title: 'MEASURABLE RESULTS',
      desc: 'Expect measurable improvements in lead generation, traffic, and ROI. Our campaigns are designed to drive conversions and impact your bottom line.',
      data: 'STATUS: IMPACTFUL'
    },
    {
      id: '04',
      title: 'OPEN COMMUNICATION',
      desc: 'We provide regular updates, detailed reports, and encourage open communication throughout the project to keep you informed and engaged.',
      data: 'STATUS: TRANSPARENT'
    }
  ]

  return (
    <section className="relative py-24 md:py-40 bg-[#050505] overflow-hidden" id="process">
      {/* HUD Elements */}
      <div className="absolute inset-0 hud-grid opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-32">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-cyan/20" />
            <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-cyan/40">Our Commitment</span>
            <div className="w-12 h-[1px] bg-cyan/20" />
          </div>
          <h2 className="font-display text-4xl md:text-9xl text-white tracking-tighter leading-none">
            QUALITY THAT <br/><span className="text-white/20 italic">DELIVERS</span><span className="text-cyan">.</span>
          </h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
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
          {STEPS.map((step, i) => (
            <motion.div
              key={step.id}
              className="group relative p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-cyan/20 transition-all duration-700 gpu-layer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: premiumSpring }
              }}
            >
              <div className="font-display text-4xl md:text-5xl text-white/5 mb-6 md:mb-8 group-hover:text-cyan/20 transition-colors">
                {step.id}
              </div>
              <h4 className="font-display text-2xl md:text-3xl text-white mb-4 transition-all">
                {step.title}
              </h4>
              <p className="text-white/30 font-light leading-relaxed text-[13px] md:text-sm mb-6 md:mb-8">
                {step.desc}
              </p>
              <div className="pt-6 border-t border-white/5 text-[8px] font-mono text-cyan/30 tracking-[0.2em] group-hover:text-cyan transition-colors">
                {step.data}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
