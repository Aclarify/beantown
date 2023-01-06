import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'textImageContent',
  title: 'Text Image Content',
  type: 'object',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'titleText',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subText',
      title: 'Sub Text',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'contentCoordinator'}],
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'button',
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
