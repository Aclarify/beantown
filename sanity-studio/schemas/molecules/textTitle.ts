import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'textTitle',
  title: 'Text Title Component',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'titleText',
      title: 'Title Text',
      type: 'string',
    }),
    defineField({
      name: 'subText',
      title: 'Sub Title Text',
      type: 'string',
    }),
  ],
})
