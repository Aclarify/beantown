import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'images',
  title: 'Images without link',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Icon or Image Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Icon or Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
