import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'link',
  title: 'Link',
  type: 'document',
  fields: [
    defineField({
      name: 'linkName',
      title: 'Link Name',
      type: 'string',
    }),
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
    }),
    defineField({
      name: 'heroIconName',
      title: 'Hero Icon Name',
      type: 'string',
    }),
    defineField({
      name: 'href',
      title: 'Link To',
      type: 'string',
    }),
    defineField({
      name: 'newWindow', //optional
      title: 'Target to Open in New Window?',
      type: 'boolean',
    }),
  ],
})
