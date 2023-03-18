import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'other-services',
  title: 'Other Services Page',
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
      type: 'portableText',
    }),
    defineField({
      name: 'heroButton',
      title: 'Hero Button',
      type: 'reference',
      to: [{type: 'cta'}],
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
      name: 'aboutTheServiceTitle',
      title: 'About The Service Title',
      type: 'string',
    }),
    defineField({
      name: 'aboutTheServiceDescription',
      title: 'About The Service - Description',
      type: 'portableText',
    }),
    defineField({
      name: 'contactUsButton',
      title: 'Contact Us Button',
      type: 'reference',
      to: [{type: 'cta'}],
    }),
    defineField({
      name: 'aboutTheServiceImage',
      title: 'About The Service - Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'servicesListTitle',
      title: 'Services List Title',
      type: 'string',
    }),
    defineField({
      name: 'servicesList',
      title: 'Services List',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
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
    defineField({
      name: 'blogsTitle',
      title: 'Blog Section Title',
      type: 'string',
    }),
    defineField({
      name: 'blogsDescription',
      title: 'Blog Section Description',
      type: 'string',
    }),
    defineField({
      name: 'blogCards',
      title: 'Blog Cards',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'blog'}],
        },
      ],
    }),
    defineField({
      name: 'blogButton',
      title: 'Blog Page Button',
      type: 'reference',
      to: [{type: 'cta'}],
    }),
    defineField({
      name: 'faqTitle',
      title: 'FAQ Title',
      type: 'string',
    }),
    defineField({
      name: 'faqDescription',
      title: 'FAQ Description',
      type: 'string',
    }),
    defineField({
      name: 'faqButton',
      title: 'FAQ Button',
      type: 'reference',
      to: [{type: 'cta'}],
    }),
    defineField({
      name: 'faqList',
      title: 'FAQ List',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'faq'}],
        },
      ],
    }),
  ],
})
