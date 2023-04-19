import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'careers',
  title: 'Careers Page',
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
      name: 'careerHeroImage',
      title: 'Career Page Masked Hero Image',
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
      name: 'heroButton',
      title: 'Hero Button',
      type: 'reference',
      to: [{type: 'cta'}],
    }),

    defineField({
      name: 'jobList',
      title: 'List of Job Details To Show',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'jobDetails'}],
        },
      ],
    }),
    defineField({
      name: 'careerBenefits',
      title: 'Career Benefits',
      type: 'array',
      of: [
        {
<<<<<<< HEAD
          type: 'titleDescriptionImage',
=======
          type: 'reference',
          to: [{type: 'titleDescriptionImage'}],
>>>>>>> 4a6af0a08ce1972e826de1cf703acb25db0d1678
        },
      ],
    }),
    defineField({
      name: 'applyButton',
      title: 'Apply Button',
      type: 'reference',
      to: [{type: 'cta'}],
    }),
  ],
})
