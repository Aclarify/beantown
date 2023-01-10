import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'imageText',
  title: 'Image Text',
  type: 'object',
  fields: [
    defineField({
      name: 'Name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'iconImage',
      title: 'Icon or Image',
      type: 'array',
      of: [
        {
          type: 'imageIcon',
        },
      ],
    }),
    defineField({
      name: 'text',
      title: 'Icon Text',
      type: 'string',
    }),
  ],
})
