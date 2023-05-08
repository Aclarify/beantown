import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'eventsList',
  title: 'Events',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'eventTitle',
      title: 'Event Title',
      type: 'string',
    }),
    defineField({
      name: 'eventUrl',
      title: 'Event URL',
      type: 'string',
    }),
    defineField({
      name: 'eventImage',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    }),
  ],
})
