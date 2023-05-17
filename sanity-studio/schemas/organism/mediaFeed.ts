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
      name: 'fbURL',
      title: 'Facebook Post URL',
      type: 'string',
    }),
    defineField({
      name: 'twitterURL',
      title: 'Twitter Post URL',
      type: 'string',
    }),
    defineField({
      name: 'instaURL',
      title: 'Instagram Post URL',
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
  ],
})
