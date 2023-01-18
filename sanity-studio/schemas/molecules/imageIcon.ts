import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'imageIcon',
  title: 'Image or Icon',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Icon or Image Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Icon or Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'text',
      title: 'Icon Text',
      type: 'string',
    }),

    defineField({
      name: 'href',
      title: 'Link To',
      type: 'string',
    }),

    defineField({
      name: 'newWindow',
      title: 'Opens in new window?',
      type: 'boolean',
    }),
    defineField({
      name: 'altText',
      title: 'Text on hover',
      type: 'string',
    }),
  ],
})
