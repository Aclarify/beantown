import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'imageIconGroup',
  title: 'Image Icon Group',
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
      name: 'icons',
      title: 'Icons',
      type: 'array',
      of: [
        {
          type: 'imageIcon',
        },
      ],
    }),
  ],
})
