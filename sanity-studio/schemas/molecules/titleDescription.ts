import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'titleDescription',
  title: 'Title Description',
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
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
  ],
})
