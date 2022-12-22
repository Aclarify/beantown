import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'linkGroup',
  title: 'Link Group',
  type: 'object',
  fields: [
    defineField({
      name: 'linkGroupName',
      title: 'Link Group Name',
      type: 'string',
    }),
    defineField({
      name: 'groupTitle',
      title: 'Link Group Title',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Sub Links',
      type: 'array',
      of: [
        {
          type: 'link',
        },
        {
          type: 'reference',
          to: [{type: 'link'}],
        },
      ],
    }),
  ],
})
