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
      title: 'Button Href',
      type: 'string',
    }),
    defineField({
      name: 'dialogTitle',
      title: 'Dialog Title Text',
      type: 'string',
    }),
    defineField({
      name: 'dialogDesc',
      title: 'Dialog Description',
      type: 'string',
    }),
    defineField({
      name: 'dialogButtonText',
      title: 'Dialog Button Text',
      type: 'string',
    }),
    defineField({
      name: 'dialogButtonHref',
      title: 'Dialog Button Target URl/Action',
      type: 'string',
    }),
  ],
})
