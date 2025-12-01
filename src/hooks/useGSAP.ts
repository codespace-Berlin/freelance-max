'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Custom hook for using GSAP animations in React components
 * 
 * @param callback - Function that receives GSAP context and element ref
 * @param dependencies - Array of dependencies for the effect
 * 
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const ref = useGSAP((ctx, el) => {
 *     gsap.from(el, {
 *       opacity: 0,
 *       y: 50,
 *       duration: 1,
 *     })
 *   })
 * 
 *   return <div ref={ref}>Animated content</div>
 * }
 * ```
 */
export function useGSAP(
  callback: (ctx: gsap.Context, element: HTMLElement) => void,
  dependencies: React.DependencyList = [],
) {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const ctx = gsap.context((context) => {
      callback(context, elementRef.current!)
    }, elementRef)

    return () => {
      ctx.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return elementRef
}

/**
 * Hook for scroll-triggered animations
 * 
 * @param callback - Function that receives GSAP timeline and element ref
 * @param options - ScrollTrigger options
 * 
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const ref = useScrollAnimation((tl, el) => {
 *     tl.from(el, {
 *       opacity: 0,
 *       y: 100,
 *       duration: 1,
 *     })
 *   }, {
 *     start: 'top 80%',
 *     end: 'top 20%',
 *   })
 * 
 *   return <div ref={ref}>Scroll animated content</div>
 * }
 * ```
 */
export function useScrollAnimation(
  callback: (tl: gsap.core.Timeline, element: HTMLElement) => void,
  scrollTriggerOptions?: ScrollTrigger.Vars,
) {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elementRef.current,
        ...scrollTriggerOptions,
      },
    })

    callback(tl, elementRef.current)

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === elementRef.current) {
          trigger.kill()
        }
      })
    }
  }, [callback, scrollTriggerOptions])

  return elementRef
}

