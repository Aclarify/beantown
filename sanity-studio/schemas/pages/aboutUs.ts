import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutUs',
  title: 'About Us',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'logoDesktop',
      title: 'Logo Desktop',
      type: 'reference',
      to: [{type: 'imageIcon'}],
    }),
    defineField({
      name: 'logoMobile',
      title: 'Logo Mobile',
      type: 'reference',
      to: [{type: 'imageIcon'}],
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
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heroImageMobile',
      title: 'Hero Background Image For Mobile Screens',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'missionTitle',
      title: 'Mission Title',
      type: 'string',
    }),
    defineField({
      name: 'missionDescription',
      title: 'Mission Description',
      type: 'portableText',
    }),
    defineField({
      name: 'missionImage',
      title: 'Mission Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'valuesTitle',
      title: 'Values Title',
      type: 'string',
    }),
    defineField({
      name: 'valuesDescription',
      title: 'Values Description',
      type: 'portableText',
    }),
    defineField({
      name: 'valuesImage',
      title: 'Values Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'valuesCards',
      title: 'Values Cards',
      type: 'array',
      of: [
        {
          type: 'imageText',
        },
      ],
    }),

    defineField({
      name: 'communityCtaTitle',
      title: 'Community CTA Title',
      type: 'string',
    }),
    defineField({
      name: 'communityCtaButton',
      title: 'Community CTA Button',
      type: 'reference',
      to: [{type: 'cta'}],
    }),
    defineField({
      name: 'communityctaImage',
      title: 'Community CTA Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'teamTitle',
      title: 'Team Title',
      type: 'string',
    }),
    defineField({
      name: 'teamDescription',
      title: 'Team Description',
      type: 'string',
    }),
    defineField({
      name: 'memberCards',
      title: 'Member Cards',
      type: 'array',
      of: [
        {
          type: 'teamMembers',
        },
      ],
    }),
    defineField({
      name: 'serviceAreas',
      title: 'Service Area Section',
      type: 'reference',
      to: [{type: 'serviceAreas'}],
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials Section',
      type: 'reference',
      to: [{type: 'testimonials'}],
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
