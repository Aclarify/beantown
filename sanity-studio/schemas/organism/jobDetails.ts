import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'jobDetails',
  title: 'Career Page Job Details',
  type: 'object',
  fields: [
    defineField({
      name: 'positionName',
      title: 'Position Name',
      type: 'string',
    }),
    defineField({
      name: 'jobImage',
      title: 'Job Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'learnMoreButton',
      title: 'Job Description Button',
      type: 'reference',
      to: [{type: 'cta'}],
    }),
    defineField({
      name: 'jobBenefitCardsSectionTitle',
      title: 'Benefit Card Section Title',
      type: 'string',
    }),

    defineField({
      name: 'jobBenefitCards',
      title: 'Position Benefits',
      type: 'array',
      of: [
        {
          type: 'titleDescriptionImage',
        },
      ],
    }),
    defineField({
      name: 'jobDescriptionTitle',
      title: 'Job Description Title',
      type: 'string',
    }),
    defineField({
      name: 'jobDescription',
      title: 'job Description',
      type: 'portableText',
    }),
    defineField({
      name: 'jobResponsibilityMainTitle',
      title: 'Job Responsibility Title',
      type: 'string',
    }),

    defineField({
      name: 'jobResponsibilityTitle',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'jobResponsibilities',
      title: 'Job Responsibility Details',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})

