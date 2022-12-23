import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'cta',
  title: 'Call To Action',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'href',
      title: 'Button href',
      type: 'string',
    }),
  ],
})
