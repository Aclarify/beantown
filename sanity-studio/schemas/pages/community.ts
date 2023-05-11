import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'community',
  title: 'Community Page',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'pageTitle',
      title: 'HTML Page Title',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'HTML Page Description',
      type: 'string',
    }),
    defineField({
      name: 'logoLight',
      title: 'Logo Light',
      type: 'reference',
      to: [{type: 'imageIcon'}],
    }),
    defineField({
      name: 'logoDark',
      title: 'Logo Dark',
      type: 'reference',
      to: [{type: 'imageIcon'}],
    }),
    defineField({
      name: 'heroImage',
      title: 'Community Page Masked Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'string',
    }),
    defineField({
      name: 'eventSectionTitle',
      title: 'Events Section Title',
      type: 'string',
    }),
    defineField({
      name: 'upcomingEvents',
      title: 'List of Upcoming Events',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'eventsList'}],
        },
      ],
    }),
    defineField({
      name: 'viewEventButtonText',
      title: 'View Events Details Button Text',
      type: 'string',
    }),
    defineField({
      name: 'loadMoreButtonText',
      title: 'Button Text to view more events',
      type: 'string',
    }),
    defineField({
      name: 'mediaFeedTitle',
      title: 'Social Media Feed Section Title',
      type: 'string',
    }),
    defineField({
      name: 'socialMediaFeed',
      title: 'Social Media Feed',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'mediaFeed'}],
        },
      ],
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'portableText',
    }),
    defineField({
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'reference',
      to: [{type: 'cta'}],
    }),
    defineField({
      name: 'ctaImage',
      title: 'CTA Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
