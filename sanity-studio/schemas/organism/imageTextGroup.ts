import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'imageTextGroup',
  title: 'Image Text Group',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'groupTitle',
      title: 'Group Title',
      type: 'string',
    }),
    defineField({
      name: 'imagesText',
      title: 'Images with text',
      type: 'array',
      of: [
        {
          type: 'imageText',
        },
      ],
    }),
  ],
})
