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
      name: 'logo',
      title: 'Logo',
      type: 'imageIcon',
    }),
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'link',
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
      type: 'cta',
    }),
  ],
})
