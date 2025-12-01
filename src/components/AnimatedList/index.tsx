'use client'

import { useGSAP } from '@/hooks/useGSAP'
import { gsap } from 'gsap'
import React, { useRef } from 'react'

interface AnimatedListProps {
  children: React.ReactNode
  className?: string
  stagger?: number
  delay?: number
}

/**
 * AnimatedList - Animates children with a stagger effect
 * 
 * @example
 * ```tsx
 * <AnimatedList stagger={0.1}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </AnimatedList>
 * ```
 */
export const AnimatedList: React.FC<AnimatedListProps> = ({
  children,
  className = '',
  stagger = 0.1,
  delay = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    (ctx, el) => {
      const items = Array.from(el.querySelectorAll(':scope > *')) as HTMLElement[]

      gsap.from(items, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay,
        stagger,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
    },
    [],
  )

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

