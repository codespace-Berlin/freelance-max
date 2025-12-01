'use client'

import { useEffect } from 'react'
import { initGSAP } from '@/utilities/animations'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * GSAP Provider component
 * Initializes GSAP and sets up global configurations
 * Should be placed high in your component tree
 */
export function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initGSAP()
    
    // Set up resize handler with cleanup
    const handleResize = () => {
      ScrollTrigger.refresh()
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <>{children}</>
}

