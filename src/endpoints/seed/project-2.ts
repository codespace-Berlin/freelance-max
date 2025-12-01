import type { Media } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type ProjectArgs = {
  featuredImage: Media
  galleryImage1: Media
}

export const project2: (args: ProjectArgs) => RequiredDataFromCollectionSlug<'projects'> = ({
  featuredImage,
  galleryImage1,
}) => {
  return {
    slug: 'task-management-app',
    _status: 'published',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and intuitive project organization.',
    featuredImage: featuredImage.id,
    gallery: [
      {
        image: galleryImage1.id,
      },
    ],
    technologies: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'MongoDB' },
      { name: 'Socket.io' },
      { name: 'Material-UI' },
    ],
    projectUrl: 'https://example.com/tasks',
    githubUrl: 'https://github.com/example/task-manager',
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
                text: 'This task management application helps teams stay organized and productive. Built with modern web technologies, it provides real-time collaboration features that keep team members in sync.',
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
        'A collaborative task management application with real-time updates, team collaboration features, and intuitive project organization.',
      image: featuredImage.id,
      title: 'Task Management App - Team Collaboration Tool',
    },
  }
}

