// ScrollProvider.jsx

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    // Force scroll to top on refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)

    const lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      lerp: 0.08,
    })

    lenis.scrollTo(0, { immediate: true })

    let rafId

    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    const resizeHandler = () => {
      lenis.resize()
    }

    window.addEventListener('resize', resizeHandler)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resizeHandler)
      lenis.destroy()
    }
  }, [])

  return children
}
