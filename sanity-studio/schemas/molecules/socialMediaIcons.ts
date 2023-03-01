import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'socialMediaIcon',
  title: 'Social Media Icon',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Icon or Image',
      type: 'reference',
      to: [{type: 'images'}],
    }),
    defineField({
      name: 'href',
      title: 'Link To',
      type: 'string',
    }),
    defineField({
      name: 'newWindow',
      title: 'Should Open in new window?',
      type: 'boolean',
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
    }),
  ],
})
