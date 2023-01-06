import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'textButtonGroup',
  title: 'Text Button Group',
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
      name: 'button',
      title: 'Button',
      type: 'cta',
    }),
  ],
})
