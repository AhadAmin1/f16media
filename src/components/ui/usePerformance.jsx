// usePerformance.jsx

import { useEffect, useRef, useCallback } from 'react'

export function usePremiumPerformance() {
  const animationFrame = useRef()

  const startAnimationLoop = useCallback((callback) => {
    const animate = (time) => {
      callback(time)
      animationFrame.current = requestAnimationFrame(animate)
    }

    animationFrame.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame.current)
    }
  }, [])

  const enableGPUAcceleration = useCallback((element) => {
    if (!element) return
    element.style.transform = 'translateZ(0)'
    element.style.backfaceVisibility = 'hidden'
  }, [])

  const optimizeCanvas = useCallback((canvas) => {
    if (!canvas) return null
    const ctx = canvas.getContext('2d', {
      alpha: true,
    })

    if (!ctx) return null
    ctx.imageSmoothingEnabled = true
    return ctx
  }, [])

  useEffect(() => {
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [])

  return {
    startAnimationLoop,
    enableGPUAcceleration,
    optimizeCanvas,
  }
}
