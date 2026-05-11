import { motion, useScroll, useTransform } from 'framer-motion'

export default function WebGLBackground() {
  const { scrollYProgress } = useScroll()
  
  // Parallax movement for background blobs
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505] overflow-hidden">
      {/* High-Performance Ambient Blobs */}
      <motion.div 
        className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full opacity-[0.06] gpu-layer floating-will-change"
        style={{ 
          background: 'radial-gradient(circle at center, #00f0ff 0%, transparent 60%)',
          y: y1
        }}
      />
      <motion.div 
        className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full opacity-[0.04] gpu-layer floating-will-change"
        style={{ 
          background: 'radial-gradient(circle at center, #8b5cf6 0%, transparent 60%)',
          y: y2
        }}
      />
      
      {/* HUD Elements */}
      <div className="absolute inset-0 hud-grid opacity-[0.02] gpu-layer" />

      {/* Subtle Grain */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay gpu-layer" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
    </div>
  )
}
