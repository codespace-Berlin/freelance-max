import type { Media } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type ProjectArgs = {
  featuredImage: Media
}

export const project3: (args: ProjectArgs) => RequiredDataFromCollectionSlug<'projects'> = ({
  featuredImage,
}) => {
  return {
    slug: 'portfolio-website',
    _status: 'published',
    title: 'Portfolio Website',
    description: 'A beautiful, responsive portfolio website showcasing creative work with smooth animations and modern design principles.',
    featuredImage: featuredImage.id,
    technologies: [
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'Framer Motion' },
      { name: 'TypeScript' },
    ],
    projectUrl: 'https://example.com/portfolio',
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Project Overview',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'A modern portfolio website designed to showcase creative work in an elegant and engaging way. The site features smooth animations, responsive design, and optimized performance.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    meta: {
      description:
        'A beautiful, responsive portfolio website showcasing creative work with smooth animations and modern design principles.',
      image: featuredImage.id,
      title: 'Portfolio Website - Creative Showcase',
    },
  }
}

