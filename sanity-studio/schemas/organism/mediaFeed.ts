import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mediaFeed',
  title: 'Social Media Feed',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'feedUrl',
      title: 'Feed URL',
      type: 'string',
    }),
    defineField({
      name: 'feedImage',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'socialMediaIcons',
      title: 'Social Media Icons',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'imageIcon', weak: true}]}],
    }),
  ],
})
