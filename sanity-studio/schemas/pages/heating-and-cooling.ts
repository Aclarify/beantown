import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heatingAndCooling',
  title: 'Heating & Cooling',
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
      name: 'servicesTitle',
      title: 'Services Offered Title',
      type: 'string',
    }),
    defineField({
      name: 'servicesDescription',
      title: 'Services Offered Description',
      type: 'portableText',
    }),
    defineField({
      name: 'servicesGroup',
      title: 'Services Group',
      type: 'array',
      of: [{type: 'titleDescriptionImage'}],
    }),
    defineField({
      name: 'massSaveTitle',
      title: 'Mass Save Section Title',
      type: 'string',
    }),
    defineField({
      name: 'massSaveDescription',
      title: 'Mass Save Section Description',
      type: 'portableText',
    }),
    defineField({
      name: 'massSaveButton',
      title: 'Mass Save Section Button',
      type: 'reference',
      to: [{type: 'cta'}],
    }),
    defineField({
      name: 'massSaveImage',
      title: 'Mass Save Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'productsTitle',
      title: 'Products Title',
      type: 'string',
    }),
    defineField({
      name: 'productsDescription',
      title: 'Products Description',
      type: 'portableText',
    }),
    defineField({
      name: 'productsGroup',
      title: 'Products Group',
      type: 'array',
      of: [{type: 'titleDescriptionImage'}],
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
    defineField({
      name: 'brandsTitle',
      title: 'Client Brands Title',
      type: 'string',
    }),
    defineField({
      name: 'clientsLogo',
      title: 'Clients Logo',
      type: 'array',
      of: [{type: 'imageIcon'}],
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
      name: 'blogCategories',
      title: 'Blog Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'categories'}],
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
