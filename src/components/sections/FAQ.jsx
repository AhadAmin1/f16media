import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const premiumSpring = {
  type: 'spring',
  stiffness: 90,
  damping: 20,
  mass: 0.8,
}

const FAQS = [
  {
    question: "What types of businesses does F16MEDIA LLC specialize in?",
    answer: "We specialize in home-improvement businesses such as air duct cleaning, carpet cleaning, chimney cleaning, garage doors, roofing, solar, dryer vent cleaning, pressure washing, and house cleaning."
  },
  {
    question: "How can F16MEDIA LLC help my business grow?",
    answer: "We focus on generating quality leads for your business through targeted digital marketing strategies, helping you scale and reach your goals effectively"
  },
  {
    question: "What can I expect from the lead generation system?",
    answer: "We provide you with high-quality, affordable leads at as low as $2 per lead. Our goal is to help you close a significant portion of those leads into confirmed appointments."
  },
  {
    question: "How do you guarantee results for my business?",
    answer: "Our proven strategies are tailored to your specific business needs. With a track record of delivering high ROI, we ensure your campaigns drive measurable success."
  },
  {
    question: "What makes F16MEDIA LLC different from other agencies?",
    answer: "Unlike other agencies, we focus exclusively on home-improvement businesses. We understand your industry and the best ways to generate high-converting leads for your business."
  },
  {
    question: "How can I get started with your services?",
    answer: "You can easily schedule a free consultation call by clicking the button below. We'll walk you through our system and discuss how we can help you achieve your business goals."
  },
  {
    question: "Do you offer ongoing support after launching campaigns?",
    answer: "Yes, we provide continuous monitoring and optimization to ensure the success of your campaigns. You will receive transparent reports and updates about the performance of your lead generation efforts."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section className="relative py-24 md:py-40 bg-[#050505] overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-cyan/40 mb-6 block">
            Intelligence Report
          </span>
          <h2 className="font-display text-4xl md:text-8xl text-white tracking-tighter leading-none mb-4">
            FREQUENTLY ASKED <br/><span className="text-white/20 italic">QUESTIONS.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div 
              key={i}
              className="border border-white/5 rounded-[1.5rem] md:rounded-[2rem] bg-white/[0.01] overflow-hidden transition-colors hover:bg-white/[0.02] gpu-layer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ ...premiumSpring, delay: i * 0.1 }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
              >
                <span className="font-display text-lg md:text-2xl text-white group-hover:text-cyan transition-colors pr-8">
                  {faq.question}
                </span>
                <span className={`text-2xl text-white/10 transition-transform duration-500 flex-shrink-0 ${activeIndex === i ? 'rotate-45 text-cyan' : ''}`}>
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={premiumSpring}
                    className="gpu-layer overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 text-white/30 font-light leading-relaxed text-[13px] md:text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
