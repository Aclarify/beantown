import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'nav',
  title: 'Nav',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'link', weak: true}],
        },
      ],
    }),
    defineField({
      name: 'navGroup',
      title: 'Navigation Group',
      type: 'array',
      of: [{type: 'linkGroup'}],
    }),
    defineField({
      name: 'headerButton',
      title: 'Header Button',
      type: 'reference',
      to: [{type: 'cta', weak: true}],
    }),
  ],
})
