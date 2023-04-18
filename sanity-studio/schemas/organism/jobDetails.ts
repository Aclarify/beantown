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
      name: 'learnMoreButton',
      title: 'Job Description Button',
      type: 'reference',
      to: [{type: 'cta'}],
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
      name: 'jobResponsibilityTitle',
      title: 'Job Responsibility Title',
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
