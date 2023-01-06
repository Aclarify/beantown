import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'titleDescriptionImageGroup',
  title: 'Image Title & Description Group',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'titleDetails',
      title: 'Titles with description',
      type: 'array',
      of: [
        {
          type: 'textTitle',
        },
      ],
    }),
    defineField({
      name: 'titleImageGroup',
      title: 'Images with Title',
      type: 'array',
      of: [
        {
          type: 'textImageContent',
        },
      ],
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'array',
      of: [
        {
          type: 'cta',
        },
        {
          type: 'reference',
          to: [{type: 'cta'}],
        },
      ],
    }),
  ],
})
