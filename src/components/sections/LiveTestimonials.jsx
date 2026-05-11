import { motion } from 'framer-motion'
import { useState } from 'react'

const premiumSpring = {
  type: 'spring',
  stiffness: 90,
  damping: 20,
  mass: 0.8,
}

const TESTIMONIAL_VIDEOS = [
  {
    id: '6gJxFfEchK4',
    title: 'Air Duct Cleaning ROI',
    desc: 'Crazy ROI results shared by our client.'
  },
  {
    id: 'tEh2WBqNDGI',
    title: 'Family Business Success',
    desc: 'How we helped a family-owned company scale.'
  },
  {
    id: 'QXGoqb3iOBQ',
    title: 'Client Retention Story',
    desc: 'Why clients come back to F16Media.'
  },
  {
    id: 'dT4EGb8NnOY',
    title: 'Florida Business Growth',
    desc: 'Taking business to the moon in Florida.'
  },
  {
    id: 'oIvJ4arGFZg',
    title: 'Lead Velocity Increase',
    desc: 'More leads and appointments reported.'
  },
  {
    id: '7BB4qsDXpBM',
    title: 'Another Win',
    desc: 'Consistent results for air duct cleaning.'
  }
]

export default function LiveTestimonials() {
  return (
    <section className="relative py-24 md:py-40 bg-[#050505] overflow-hidden" id="live-testimonials">
      {/* HUD Grid Background */}
      <div className="absolute inset-0 hud-grid opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-32">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-cyan/20" />
            <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-cyan/40">Voices of Trust</span>
            <div className="w-12 h-[1px] bg-cyan/20" />
          </div>
          <h2 className="font-display text-4xl md:text-9xl text-white tracking-tighter leading-none">
            LIVE <br/><span className="text-white/20 italic">TESTIMONIALS</span><span className="text-cyan">.</span>
          </h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
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
          {TESTIMONIAL_VIDEOS.map((video, i) => (
            <motion.div
              key={video.id}
              className="group flex flex-col gpu-layer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: premiumSpring }
              }}
            >
              <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden border border-white/5 bg-white/[0.01] shadow-xl transition-all duration-700 group-hover:border-cyan/20">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="mt-8 space-y-4 px-2">
                <h4 className="font-display text-xl text-white group-hover:text-cyan transition-colors">
                  {video.title}
                </h4>
                <p className="text-white/30 text-sm font-light leading-relaxed">
                  {video.desc}
                </p>
                <motion.a
                  href="https://calendly.com/f16mediallc/strategycall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[10px] font-bold tracking-widest text-cyan uppercase group-hover:gap-5 transition-all"
                >
                  GET ME STARTED <span className="text-lg">→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
