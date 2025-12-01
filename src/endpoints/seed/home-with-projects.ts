import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media, Project } from '@/payload-types'

type HomeArgs = {
  heroImage: Media
  metaImage: Media
  projects: Project[]
}

export const homeWithProjects: (args: HomeArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
  projects,
}) => {
  return {
    slug: 'home',
    _status: 'published',
    hero: {
      type: 'highImpact',
      links: [
        {
          link: {
            type: 'custom',
            appearance: 'default',
            label: 'View Projects',
            url: '/projects',
          },
        },
        {
          link: {
            type: 'custom',
            appearance: 'outline',
            label: 'Contact',
            url: '/contact',
          },
        },
      ],
      media: heroImage.id,
      richText: {
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
                  text: 'Welcome to My Portfolio',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h1',
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
                  text: 'I create beautiful, functional web applications that solve real-world problems. Explore my work and discover how I can help bring your ideas to life.',
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
    },
    layout: [
      {
        blockName: 'Projects Section',
        blockType: 'projectsSection',
        title: 'Featured Projects',
        introContent: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Here are some of my recent projects that showcase my skills and expertise in modern web development.',
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
        populateBy: 'collection',
        limit: 6,
      },
      {
        blockName: 'Services Section',
        blockType: 'servicesSection',
        title: 'My Services',
        introContent: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'I offer a range of services to help you build and grow your digital presence.',
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
        services: [
          {
            title: 'Web Development',
            description: 'Custom web applications built with modern frameworks like Next.js, React, and TypeScript.',
          },
          {
            title: 'UI/UX Design',
            description: 'Beautiful, user-friendly interfaces designed with attention to detail and user experience.',
          },
          {
            title: 'CMS Integration',
            description: 'Headless CMS solutions with Payload CMS for flexible content management.',
          },
          {
            title: 'E-Commerce Solutions',
            description: 'Full-featured e-commerce platforms with payment integration and inventory management.',
          },
          {
            title: 'API Development',
            description: 'RESTful and GraphQL APIs built for scalability and performance.',
          },
          {
            title: 'Consulting',
            description: 'Technical consulting to help you make the right technology decisions for your project.',
          },
        ],
      },
    ],
    meta: {
      description: 'Portfolio website showcasing web development projects and services.',
      image: heroImage.id,
      title: 'Home - Portfolio',
    },
    title: 'Home',
  }
}

