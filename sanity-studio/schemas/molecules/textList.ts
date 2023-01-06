import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'textList',
  title: 'Text List',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'listItem',
      title: 'List Item',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
