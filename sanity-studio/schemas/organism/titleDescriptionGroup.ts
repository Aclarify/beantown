import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'titleDescriptionGroup',
  title: 'Title & Description Group',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'titlesDescription',
      title: 'Titles with description',
      type: 'array',
      of: [
        {
          type: 'titleDescription',
        },
      ],
    }),
  ],
})
