import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionWrapper({ children, className = "" }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        type: 'spring',
        stiffness: 90,
        damping: 20,
        mass: 0.8,
      }}
      className={`gpu-layer ${className}`}
    >
      {children}
    </motion.div>
  )
}
