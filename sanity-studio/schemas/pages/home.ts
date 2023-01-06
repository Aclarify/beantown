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
      name: 'headerTitle',
      title: 'Header Title',
      type: 'string',
    }),
    defineField({
      name: 'headerDescription',
      title: 'Header Description',
      type: 'portableText',
    }),
    defineField({
      name: 'headerButton',
      title: 'Header Button',
      type: 'reference',
      to: [{type: 'cta'}],
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
      of: [{type: 'textButtonGroup'}],
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
      name: 'whyUsCards',
      title: 'Why Us Cards',
      type: 'array',
      of: [
        {
          type: 'titleDescription',
        },
      ],
    }),
    defineField({
      name: 'testimonialTitle',
      title: 'Testimonial Title',
      type: 'string',
    }),
    defineField({
      name: 'testimonialDescription',
      title: 'Testimonial Description',
      type: 'string',
    }),
    defineField({
      name: 'testimonialCards',
      title: 'Testimonial Cards',
      type: 'array',
      of: [
        {
          type: 'titleDescription',
        },
      ],
    }),
    defineField({
      name: 'serviceAreaTitle',
      title: 'Service Area Title',
      type: 'string',
    }),
    defineField({
      name: 'serviceAreaDescription',
      title: 'Service Area Description',
      type: 'string',
    }),
    defineField({
      name: 'serviceAreas',
      title: 'Service Areas',
      type: 'array',
      of: [{type: 'textList'}],
    }),
    defineField({
      name: 'blogTitle',
      title: 'Blog Title',
      type: 'string',
    }),
    defineField({
      name: 'blogDescription',
      title: 'Blog Description',
      type: 'string',
    }),
    defineField({
      name: 'blogCards',
      title: 'Blog Cards',
      type: 'array',
      of: [{type: 'imageDescriptionButtonGroup'}],
    }),
    defineField({
      name: 'blogButton',
      title: 'Blog Button',
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
      of: [{type: 'titleDescriptionGroup'}],
    }),
    defineField({
      name: 'clientsLogo',
      title: 'Clients Logo',
      type: 'array',
      of: [{type: 'imageIconGroup'}],
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
  ],
})