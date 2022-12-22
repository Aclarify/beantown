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
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'contentCoordinator'}]}],
    }),
  ],
})
