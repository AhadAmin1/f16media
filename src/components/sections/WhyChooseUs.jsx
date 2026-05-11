import { motion } from 'framer-motion'

const premiumSpring = {
  type: 'spring',
  stiffness: 90,
  damping: 20,
  mass: 0.8,
}

export default function WhyChooseUs() {
  const REASONS = [
    {
      title: 'Tailored Solutions',
      desc: 'At F16MEDIA LLC, we don’t just build websites; we craft tailored digital solutions designed to elevate your business.',
      icon: '⚡'
    },
    {
      title: 'Innovative Strategies',
      desc: 'Our team is dedicated to connecting businesses with their audiences through innovative strategies in web development and lead generation.',
      icon: '🧠'
    },
    {
      title: 'Latest Technologies',
      desc: 'By leveraging the latest technologies and marketing tactics, we create results-driven campaigns that increase visibility and boost ROI.',
      icon: '🚀'
    },
    {
      title: 'Digital Excellence',
      desc: 'Our passion for digital excellence and commitment to client success is what sets us apart. Your business is our business.',
      icon: '💎'
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-cyan/40 mb-6 block">
            The Advantage
          </span>
          <h2 className="font-display text-4xl md:text-7xl text-white tracking-tight leading-tight">
            WHY <span className="text-white/20 italic">US?</span>
          </h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
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
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              className="p-8 md:p-10 rounded-[2rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-700 gpu-layer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: premiumSpring }
              }}
            >
              <div className="text-3xl md:text-4xl mb-6 md:mb-8 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                {reason.icon}
              </div>
              <h4 className="font-display text-xl md:text-2xl text-white mb-4 leading-tight">
                {reason.title}
              </h4>
              <p className="text-white/30 font-light leading-relaxed text-[13px] md:text-sm">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
