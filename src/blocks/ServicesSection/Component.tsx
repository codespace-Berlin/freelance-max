import type { ServicesSectionBlock as ServicesSectionBlockProps } from '@/payload-types'

import React from 'react'
import { AnimatedServices } from './AnimatedServices'

export const ServicesSectionBlock: React.FC<
  ServicesSectionBlockProps & {
    id?: string
  }
> = (props) => {
  const { id, introContent, services, title } = props

  return (
    <div id={`block-${id}`}>
      <AnimatedServices title={title} introContent={introContent} services={services} />
    </div>
  )
}

