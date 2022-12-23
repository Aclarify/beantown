import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'array',
      of: [
        {type: 'imageIcon'},
        {
          type: 'reference',
          to: [{type: 'imageIcon'}],
        },
      ],
    }),
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {type: 'link'},
        {
          type: 'reference',
          to: [{type: 'link'}],
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
      type: 'array',
      of: [
        {
          type: 'cta',
        },
        {
          type: 'reference',
          to: [{type: 'cta'}],
        },
      ],
    }),
  ],
})
