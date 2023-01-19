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
      name: 'logo',
      title: 'Logo',
      type: 'image',
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
      of: [{type: 'textImageButtonGroup'}],
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
      name: 'testimonialCardIcon',
      title: 'Testimonial Card Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      name: 'serviceAreaImage',
      title: 'Service Areas Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'serviceAreas',
      title: 'Service Areas',
      type: 'textList',
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
      of: [{type: 'titleDescription'}],
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
