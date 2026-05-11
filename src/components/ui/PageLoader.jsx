import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-void z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="relative">
          <div className="relative flex flex-col items-center justify-center">
            {/* Logo */}
            <motion.div
              className="relative z-10 text-center overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="font-display text-4xl md:text-5xl tracking-[0.2em] text-white">
                F16<span className="text-white/40">MEDIA</span>
              </div>
            </motion.div>

            {/* Premium minimal loading bar */}
            <motion.div 
              className="mt-8 w-48 h-[1px] bg-white/10 relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-white"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </motion.div>
            
            <motion.div
              className="mt-4 font-label text-[10px] tracking-[0.3em] uppercase text-white/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              INITIALIZING EXPERIENCE
            </motion.div>
          </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
