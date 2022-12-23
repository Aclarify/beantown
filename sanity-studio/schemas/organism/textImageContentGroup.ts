import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'textImageContentGroup',
  title: 'Text Image Content Group',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField({
      name: 'textImageContents',
      title: 'TextImageContents',
      type: 'array',
      of: [
        {
          type: 'textImageContent',
        },
      ],
    }),
  ],
})
