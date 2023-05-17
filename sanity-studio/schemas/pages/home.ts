import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
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
      of: [{type: 'servicesCards'}],
    }),
    defineField({
      name: 'whyUsTitle',
      title: 'Why Us Title',
      type: 'string',
    }),
    defineField({
      name: 'whyUsDescription',
      title: 'Why Us Description',
      type: 'portableText',
    }),
    defineField({
      name: 'whyUsButton',
      title: 'Why Us Button',
      type: 'reference',
      to: [{type: 'cta'}],
    }),
    defineField({
      name: 'whyUsImage',
      title: 'Why Us Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'whyUsCards',
      title: 'Why Us Cards',
      type: 'array',
      of: [
        {
          type: 'titleDescriptionImage',
        },
      ],
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
    defineField({
      name: 'mitsubishiDiamondTitle',
      title: 'Mitsubishi Diamond Section Title',
      type: 'string',
    }),
    defineField({
      name: 'mitsubishiDiamondDescription',
      title: 'Mitsubishi Diamond Section Description',
      type: 'portableText',
    }),
    defineField({
      name: 'mitsubishiLogo',
      title: 'Mitsubishi Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mitsubishiDiamondImage',
      title: 'Mitsubishi Diamond Section Image',
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
