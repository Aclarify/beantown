import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'servicesCards',
  title: 'Services Cards Group',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name/ Card Title',
      type: 'string',
    }),
    defineField({
      name: 'thumbnailImage',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'isMainService',
      title: 'Is this the Primary Service?',
      type: 'boolean',
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'cta',
    }),
  ],
})
