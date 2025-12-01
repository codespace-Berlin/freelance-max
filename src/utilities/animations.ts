'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Common animation presets for reuse across components
 */
export const animations = {
  /**
   * Fade in animation
   */
  fadeIn: (element: HTMLElement | string, options?: gsap.TweenVars) => {
    return gsap.from(element, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      ...options,
    })
  },

  /**
   * Slide up animation
   */
  slideUp: (element: HTMLElement | string, options?: gsap.TweenVars) => {
    return gsap.from(element, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      ...options,
    })
  },

  /**
   * Slide down animation
   */
  slideDown: (element: HTMLElement | string, options?: gsap.TweenVars) => {
    return gsap.from(element, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      ...options,
    })
  },

  /**
   * Scale in animation
   */
  scaleIn: (element: HTMLElement | string, options?: gsap.TweenVars) => {
    return gsap.from(element, {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.7)',
      ...options,
    })
  },

  /**
   * Stagger animation for multiple elements
   */
  stagger: (
    elements: HTMLElement[] | string,
    animation: gsap.TweenVars,
    staggerOptions?: gsap.StaggerVars,
  ) => {
    return gsap.from(elements, {
      ...animation,
      stagger: {
        amount: 0.3,
        ...staggerOptions,
      },
    })
  },

  /**
   * Scroll-triggered fade in
   */
  scrollFadeIn: (
    element: HTMLElement | string,
    scrollOptions?: ScrollTrigger.Vars,
    animationOptions?: gsap.TweenVars,
  ) => {
    return gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
        ...scrollOptions,
      },
      ...animationOptions,
    })
  },

  /**
   * Parallax effect
   */
  parallax: (
    element: HTMLElement | string,
    speed: number = 0.5,
    scrollOptions?: ScrollTrigger.Vars,
  ) => {
    return gsap.to(element, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        ...scrollOptions,
      },
    })
  },
}

/**
 * Initialize GSAP with default settings
 */
export function initGSAP() {
  // Set default easing
  gsap.defaults({
    ease: 'power2.out',
  })

  // Refresh ScrollTrigger on window resize
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      ScrollTrigger.refresh()
    })
  }
}

