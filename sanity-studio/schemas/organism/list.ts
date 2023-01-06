import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'list',
  title: 'List',
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
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'portableText'}],
    }),
    defineField({
      name: 'icons',
      title: 'Icons',
      type: 'array',
      of: [
        {
          type: 'imageTextGroup',
        },
      ],
    }),
  ],
})
