import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'memberships',
  title: 'Memberships',
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
      title: 'Logo mobile',
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
      name: 'serviceMembershipsSection',
      title: 'Services Memberships Section',
      type: 'array',
      of: [
        {
          name: 'serviceMemberships',
          type: 'reference',
          to: [{type: 'serviceMemberships'}],
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
      name: 'finalCtaButton',
      title: 'Final CTA Button',
      type: 'reference',
      to: [{type: 'cta'}],
    }),
    defineField({
      name: 'ctaImage',
      title: 'Final CTA Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
