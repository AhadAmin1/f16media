import { motion } from 'framer-motion'

const premiumSpring = {
  type: 'spring',
  stiffness: 90,
  damping: 20,
  mass: 0.8,
}

const RESULTS_IMAGES = [
  {
    url: 'https://f16media.agency/wp-content/uploads/2025/04/WhatsApp-Image-2024-12-06-at-8.17.45-PM-1.webp',
    title: 'Lead Gen Results'
  },
  {
    url: 'https://f16media.agency/wp-content/uploads/2025/04/WhatsApp-Image-2024-03-18-at-4.48.58-AM.webp',
    title: 'Campaign Performance'
  },
  {
    url: 'https://f16media.agency/wp-content/uploads/2025/04/WhatsApp-Image-2024-03-30-at-10.17.48-PM-1024x758-1.webp',
    title: 'Client Strategy Feedback'
  },
  {
    url: 'https://f16media.agency/wp-content/uploads/2025/04/WhatsApp-Image-2024-04-13-at-2.28.17-AM-768x1647-1.webp',
    title: 'Daily Progress'
  },
  {
    url: 'https://f16media.agency/wp-content/uploads/2025/04/WhatsApp-Image-2024-04-28-at-12.33.06-PM.webp',
    title: 'Conversion Metrics'
  },
  {
    url: 'https://f16media.agency/wp-content/uploads/2025/04/WhatsApp-Image-2024-06-19-at-10.50.45-PM.webp',
    title: 'Success Milestone'
  }
]

export default function LiveResults() {
  return (
    <section className="relative py-24 md:py-40 bg-[#050505] overflow-hidden" id="live-results">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-32">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-cyan/20" />
            <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-cyan/40">Proven Results</span>
            <div className="w-12 h-[1px] bg-cyan/20" />
          </div>
          <h2 className="font-display text-4xl md:text-9xl text-white tracking-tighter leading-none">
            SOME OF OUR <br/><span className="text-white/20 italic">LIVE RESULTS</span><span className="text-cyan">.</span>
          </h2>
        </div>

        <motion.div 
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
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
          {RESULTS_IMAGES.map((image, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid group relative rounded-3xl overflow-hidden border border-white/5 bg-white/[0.01] gpu-layer"
              variants={{
                hidden: { opacity: 0, scale: 0.98 },
                visible: { opacity: 1, scale: 1, transition: premiumSpring }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[8px] font-bold tracking-widest text-cyan uppercase bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-cyan/20">
                  {image.title}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 text-center">
          <motion.a
            href="https://calendly.com/f16mediallc/strategycall"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-white text-black font-bold tracking-widest text-[10px] rounded-full hover:bg-cyan hover:text-black transition-all duration-500 uppercase inline-flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GET ME STARTED <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
