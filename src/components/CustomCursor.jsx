import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const glowRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is touch-enabled
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0)
    }
    
    checkMobile()
    if (isMobile) return

    const cursor = cursorRef.current
    const dot = dotRef.current
    const glow = glowRef.current
    
    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0
    let dotX = 0
    let dotY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      // Smooth follow for main ring
      cursorX += (mouseX - cursorX) * 0.12
      cursorY += (mouseY - cursorY) * 0.12
      
      // Snappy follow for dot
      dotX += (mouseX - dotX) * 0.3
      dotY += (mouseY - dotY) * 0.3

      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%) scale(${cursor.dataset.scale || 1})`
      }
      if (dot) {
        dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`
      }
      if (glow) {
        glow.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', moveCursor)
    const animationId = requestAnimationFrame(animate)

    // Hover effects using scale instead of width/height
    const handleHover = () => {
      if (cursor) {
        cursor.dataset.scale = "1.8"
        cursor.style.backgroundColor = 'rgba(0, 240, 255, 0.05)'
        cursor.style.borderColor = 'rgba(0, 240, 255, 0.4)'
      }
    }

    const handleLeave = () => {
      if (cursor) {
        cursor.dataset.scale = "1"
        cursor.style.backgroundColor = 'transparent'
        cursor.style.borderColor = 'rgba(255, 255, 255, 0.2)'
      }
    }

    const interactables = document.querySelectorAll('a, button, [role="button"]')
    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleHover)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      cancelAnimationFrame(animationId)
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', handleHover)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      {/* Global Searchlight Glow (Optimized) */}
      <div 
        ref={glowRef}
        className="fixed top-0 left-0 w-[400px] h-[400px] pointer-events-none z-[1] opacity-[0.1] gpu-layer"
        style={{
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.2) 0%, transparent 70%)',
          mixBlendMode: 'screen',
          filter: 'blur(20px)'
        }}
      />
      
      {/* Precision Dot */}
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-1 h-1 bg-cyan rounded-full z-[9999] pointer-events-none shadow-[0_0_8px_rgba(0,240,255,0.6)] gpu-layer"
      />
      
      {/* Main Trailing Ring */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white/20 rounded-full z-[9998] pointer-events-none transition-colors duration-500 ease-out gpu-layer"
      />
    </>
  )
}
