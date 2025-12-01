'use client'

/**
 * GSAP Usage Examples
 * 
 * This file contains examples of how to use GSAP animations in your components.
 * Copy and adapt these examples for your needs.
 */

import { useGSAP, useScrollAnimation } from '@/hooks/useGSAP'
import { animations } from '@/utilities/animations'
import { gsap } from 'gsap'
import React, { useRef } from 'react'

// Example 1: Basic fade in animation
export const FadeInExample = () => {
  const ref = useGSAP((ctx, el) => {
    animations.fadeIn(el)
  }, [])

  return <div ref={ref as React.RefObject<HTMLDivElement>}>This will fade in</div>
}

// Example 2: Scroll-triggered animation
export const ScrollTriggerExample = () => {
  const ref = useScrollAnimation((tl, el) => {
    tl.from(el, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
    })
  }, {
    start: 'top 80%',
    end: 'top 20%',
  })

  return <div ref={ref as React.RefObject<HTMLDivElement>}>This animates on scroll</div>
}

// Example 3: Stagger animation for list items
export const StaggerListExample = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP((ctx, el) => {
    const items = Array.from(el.querySelectorAll('.list-item')) as HTMLElement[]
    animations.stagger(items, {
      opacity: 0,
      y: 30,
      duration: 0.6,
    }, {
      amount: 0.3,
    })
  }, [])

  return (
    <div ref={containerRef}>
      <div className="list-item">Item 1</div>
      <div className="list-item">Item 2</div>
      <div className="list-item">Item 3</div>
    </div>
  )
}

// Example 4: Parallax effect
export const ParallaxExample = () => {
  const ref = useGSAP((ctx, el) => {
    animations.parallax(el, 0.5)
  }, [])

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="h-screen">
      Parallax content
    </div>
  )
}

// Example 5: Complex timeline animation
export const TimelineExample = () => {
  const ref = useGSAP((ctx, el) => {
    const tl = gsap.timeline()
    
    tl.from(el.querySelector('.title'), {
      opacity: 0,
      y: -20,
      duration: 0.6,
    })
    .from(el.querySelector('.subtitle'), {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, '-=0.3')
    .from(Array.from(el.querySelectorAll('.item')) as HTMLElement[], {
      opacity: 0,
      x: -30,
      duration: 0.4,
      stagger: 0.1,
    })
  }, [])

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <h1 className="title">Title</h1>
      <p className="subtitle">Subtitle</p>
      <div className="item">Item 1</div>
      <div className="item">Item 2</div>
    </div>
  )
}

