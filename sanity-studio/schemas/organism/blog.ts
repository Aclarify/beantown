import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',

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
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'blogImage',
      title: 'Thumbnail Image',
      type: 'imageIcon',
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'reference',
      to: [
        {
          type: 'cta',
        },
      ],
    }),
  ],
})
