import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'financing',
  title: 'Financing',
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
      name: 'aboutSectionTitle',
      title: 'About Section Title',
      type: 'string',
    }),
    defineField({
      name: 'aboutSectionDescription',
      title: 'About Section Description',
      type: 'portableText',
    }),
    defineField({
      name: 'aboutSectionImage',
      title: 'About Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'benefitsTitle',
      title: 'Benefits Section Title',
      type: 'string',
    }),
    defineField({
      name: 'benefitsDescription',
      title: 'Benefits Section Description',
      type: 'portableText',
    }),
    defineField({
      name: 'benefitsImage',
      title: 'Benefits Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'serviceAreaSection',
      title: 'Service Area Section',
      type: 'reference',
      to: [{type: 'serviceAreas'}],
    }),
    defineField({
      name: 'testimonialSection',
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
