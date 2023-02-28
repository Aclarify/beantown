import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'serviceAreas',
  title: 'BeanTown Service Areas',
  type: 'document',
  fields: [
    defineField({
      name: 'serviceAreaTitle',
      title: 'Service Area Title',
      type: 'string',
    }),
    defineField({
      name: 'serviceAreaDescription',
      title: 'Service Area Description',
      type: 'string',
    }),
    defineField({
      name: 'serviceAreaImage',
      title: 'Service Areas Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'serviceAreas',
      title: 'Service Areas',
      type: 'textList',
    }),
  ],
})
