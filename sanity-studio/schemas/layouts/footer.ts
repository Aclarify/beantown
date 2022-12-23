import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
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
        {
          type: 'imageIcon',
        },
        {
          type: 'reference',
          to: [{type: 'imageIcon'}],
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'socialMediaIcons',
      title: 'Social Media Icons',
      type: 'array',
      of: [{type: 'imageIconGroup'}],
    }),
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
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
    defineField({
      name: 'navGroup',
      title: 'Navigation Group',
      type: 'array',
      of: [{type: 'linkGroup'}],
    }),
    defineField({
      name: 'contactUs',
      title: 'Contact us',
      type: 'array',
      of: [{type: 'imageTextGroup'}],
    }),
    defineField({
      name: 'copyright',
      title: 'CopyRight Text',
      type: 'string',
    }),
  ],
})
