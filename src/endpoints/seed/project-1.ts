import type { Media } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type ProjectArgs = {
  featuredImage: Media
  galleryImage1: Media
  galleryImage2: Media
}

export const project1: (args: ProjectArgs) => RequiredDataFromCollectionSlug<'projects'> = ({
  featuredImage,
  galleryImage1,
  galleryImage2,
}) => {
  return {
    slug: 'e-commerce-platform',
    _status: 'published',
    title: 'E-Commerce Platform',
    description: 'A modern, scalable e-commerce solution built with Next.js and Payload CMS, featuring real-time inventory management and seamless payment integration.',
    featuredImage: featuredImage.id,
    gallery: [
      {
        image: galleryImage1.id,
      },
      {
        image: galleryImage2.id,
      },
    ],
    technologies: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Payload CMS' },
      { name: 'Stripe' },
      { name: 'PostgreSQL' },
    ],
    projectUrl: 'https://example.com/ecommerce',
    githubUrl: 'https://github.com/example/ecommerce',
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
                text: 'This e-commerce platform was built to provide a seamless shopping experience with modern web technologies. The platform features a headless CMS architecture, allowing for flexible content management and easy integration with various frontend frameworks.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Key Features',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h3',
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
                text: '• Real-time inventory management\n• Secure payment processing with Stripe\n• Advanced search and filtering\n• Responsive design for all devices\n• Admin dashboard for content management',
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
        'A modern, scalable e-commerce solution built with Next.js and Payload CMS, featuring real-time inventory management and seamless payment integration.',
      image: featuredImage.id,
      title: 'E-Commerce Platform - Modern Shopping Solution',
    },
  }
}

