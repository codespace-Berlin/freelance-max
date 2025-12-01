import type { Project, ProjectsSectionBlock as ProjectsSectionBlockProps } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import RichText from '@/components/RichText'

import { CollectionArchive } from '@/components/CollectionArchive'

export const ProjectsSectionBlock: React.FC<
  ProjectsSectionBlockProps & {
    id?: string
  }
> = async (props) => {
  const { id, introContent, limit: limitFromProps, populateBy, selectedProjects, title } = props

  const limit = limitFromProps || 6

  let projects: Project[] = []

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise })

    const fetchedProjects = await payload.find({
      collection: 'projects',
      depth: 1,
      limit,
      sort: '-publishedAt',
    })

    projects = fetchedProjects.docs
  } else {
    if (selectedProjects?.length) {
      const filteredSelectedProjects = selectedProjects
        .map((project) => {
          if (typeof project === 'object' && project !== null && 'value' in project) {
            return typeof project.value === 'object' ? project.value : null
          }
          if (typeof project === 'object' && project !== null) {
            return project
          }
          return null
        })
        .filter((p): p is Project => p !== null && typeof p === 'object')

      projects = filteredSelectedProjects
    }
  }

  return (
    <div id={`block-${id}`}>
      <div className="container mb-16">
        {title && <h2 className="text-4xl font-bold mb-8">{title}</h2>}
        {introContent && (
          <RichText className="ms-0 max-w-[48rem]" data={introContent} enableGutter={false} />
        )}
      </div>
      <CollectionArchive posts={projects as any} relationTo="projects" />
    </div>
  )
}

