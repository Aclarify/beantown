import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'imageDescriptionButtonGroup',
  title: 'Images with Description & Button',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'portableText',
    }),
    defineField({
      name: 'image',
      title: 'Images',
      type: 'imageIcon',
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'reference',
      to: [
        {
          type: 'cta',
        },
      ],
    }),
  ],
})
