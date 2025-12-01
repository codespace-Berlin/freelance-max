'use client'

import React from 'react'
import Link from 'next/link'
import { Media } from '@/components/Media'
import { AnimatedList } from '@/components/AnimatedList'
import { AnimatedSection } from '@/components/AnimatedSection'
import RichText from '@/components/RichText'

import type { ServicesSectionBlock as ServicesSectionBlockProps } from '@/payload-types'

export const AnimatedServices: React.FC<{
  title?: string | null
  introContent?: any
  services?: ServicesSectionBlockProps['services']
}> = ({ title, introContent, services }) => {
  return (
    <>
      <AnimatedSection animation="fadeIn" delay={0.1}>
        <div className="container mb-16">
          {title && <h2 className="text-4xl font-bold mb-8">{title}</h2>}
          {introContent && (
            <RichText className="ms-0 max-w-[48rem]" data={introContent} enableGutter={false} />
          )}
        </div>
      </AnimatedSection>
      {services && services.length > 0 && (
        <div className="container">
          <AnimatedList stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              if (!service || typeof service === 'string') return null

              const ServiceContent = (
                <div className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
                  {service.icon && typeof service.icon === 'object' && (
                    <div className="mb-4">
                      <Media resource={service.icon} />
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  {service.description && (
                    <p className="text-muted-foreground">{service.description}</p>
                  )}
                </div>
              )

              if (service.link) {
                return (
                  <Link key={index} href={service.link}>
                    {ServiceContent}
                  </Link>
                )
              }

              return <React.Fragment key={index}>{ServiceContent}</React.Fragment>
            })}
          </AnimatedList>
        </div>
      )}
    </>
  )
}

