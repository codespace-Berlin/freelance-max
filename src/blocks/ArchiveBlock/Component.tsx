import type { Post, Project, ArchiveBlock as ArchiveBlockProps } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import RichText from '@/components/RichText'

import { CollectionArchive } from '@/components/CollectionArchive'

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
  }
> = async (props) => {
  const { id, categories, introContent, limit: limitFromProps, populateBy, relationTo, selectedDocs } = props

  const limit = limitFromProps || 3
  const collection = relationTo || 'posts'

  let items: (Post | Project)[] = []

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise })

    if (collection === 'posts') {
      const flattenedCategories = categories?.map((category) => {
        if (typeof category === 'object') return category.id
        else return category
      })

      const fetchedItems = await payload.find({
        collection: 'posts',
        depth: 1,
        limit,
        ...(flattenedCategories && flattenedCategories.length > 0
          ? {
              where: {
                categories: {
                  in: flattenedCategories,
                },
              },
            }
          : {}),
      })

      items = fetchedItems.docs
    } else if (collection === 'projects') {
      const fetchedItems = await payload.find({
        collection: 'projects',
        depth: 1,
        limit,
      })

      items = fetchedItems.docs
    }
  } else {
    if (selectedDocs?.length) {
      const filteredItems = selectedDocs
        .map((doc) => {
          if (typeof doc === 'object' && doc.value) {
            return typeof doc.value === 'object' ? doc.value : null
          }
          return null
        })
        .filter(Boolean) as (Post | Project)[]

      items = filteredItems
    }
  }

  return (
    <div className="my-16" id={`block-${id}`}>
      {introContent && (
        <div className="container mb-16">
          <RichText className="ms-0 max-w-[48rem]" data={introContent} enableGutter={false} />
        </div>
      )}
      <CollectionArchive posts={items as any} relationTo={collection} />
    </div>
  )
}
