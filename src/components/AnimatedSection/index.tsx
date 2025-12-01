'use client'

import { useGSAP } from '@/hooks/useGSAP'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'scaleIn'
  delay?: number
  duration?: number
}

/**
 * AnimatedSection - A wrapper component that adds scroll-triggered animations
 * 
 * @example
 * ```tsx
 * <AnimatedSection animation="fadeIn" delay={0.2}>
 *   <h2>This will fade in on scroll</h2>
 * </AnimatedSection>
 * ```
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 0.8,
}) => {
  const ref = useGSAP(
    (ctx, el) => {
      const animations = {
        fadeIn: { opacity: 0 },
        slideUp: { opacity: 0, y: 50 },
        slideDown: { opacity: 0, y: -50 },
        scaleIn: { opacity: 0, scale: 0.8 },
      }

      gsap.from(el, {
        ...animations[animation],
        duration,
        delay,
        ease: animation === 'scaleIn' ? 'back.out(1.7)' : 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      })
    },
    [],
  )

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children}
    </div>
  )
}

