import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'massSave',
  title: 'Mass Save Incentive',
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
      name: 'aboutMassSaveTitle',
      title: 'About Mass Save Section Title',
      type: 'string',
    }),
    defineField({
      name: 'aboutMassSaveDescription',
      title: 'About Mass Save Section Description',
      type: 'portableText',
    }),
    defineField({
      name: 'aboutMassSaveImage',
      title: 'About Mass Save Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featuresTitle',
      title: 'Mass Save Features  Title',
      type: 'string',
    }),
    defineField({
      name: 'featuresDescription',
      title: 'Mass Save Features Description',
      type: 'portableText',
    }),
    defineField({
      name: 'featuresImage',
      title: 'Mass Save Features Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'massSaveSection3Title',
      title: 'Mass Save  Section  Title',
      type: 'string',
    }),
    defineField({
      name: 'massSaveSection3Description',
      title: 'Mass Save Section Description',
      type: 'portableText',
    }),
    defineField({
      name: 'massSaveSection3Image',
      title: 'Mass Save Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'howItWorksTitle',
      title: 'How it Works Section Title',
      type: 'string',
    }),
    defineField({
      name: 'howItWorksDescription',
      title: 'How it Works Section Description',
      type: 'portableText',
    }),
    defineField({
      name: 'stagesCards',
      title: 'Stages Cards',
      type: 'array',
      of: [
        {
          type: 'titleDescriptionImage',
        },
      ],
    }),
    defineField({
      name: 'contactButton',
      title: 'Contact Us Button',
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
