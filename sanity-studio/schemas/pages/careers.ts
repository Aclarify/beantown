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
          type: 'jobDetails',
        },
      ],
    }),
    defineField({
      name: 'globaljobBenefitSectionTitle',
      title: 'Global Job Benefit  Section Title',
      type: 'string',
    }),
    defineField({
      name: 'careerBenefits',
      title: 'Career Benefits',
      type: 'array',
      of: [
        {
          type: 'titleDescriptionImage',
        },
      ],
    }),
    defineField({
      name: 'applyButton',
      title: 'Apply Button',
      type: 'reference',
      to: [{type: 'cta'}],
    }),
    defineField({
      name: 'applicationTitle',
      title: 'Application Title',
      type: 'string',
    }),
    defineField({
      name: 'applicationDescription',
      title: 'Application Description',
      type: 'string',
    }),
    defineField({
      name: 'applicationImage',
      title: 'Application Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'employementTypeOptions',
      title: 'Employment Type Options',
      type: 'array',
      of: [
        {
          type: 'dropdownOptions',
        },
      ],
    }),
  ],
})
