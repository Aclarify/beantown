import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'titleDescriptionImage',
  title: 'Title Description with Image',
  type: 'object',
  fields: [
    defineField({
      name: 'titleText',
      title: 'Title Text',
      type: 'string',
    }),
    defineField({
      name: 'subText',
      title: 'Subtle Text',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'portableText',
    }),
  ],
})
