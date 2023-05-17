import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'linksHub',
  title: 'Links Hub',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'pageTitle',
      title: 'HTML Page Title',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'HTML Page Description',
      type: 'string',
    }),
    defineField({
      name: 'logoLight',
      title: 'Logo Light',
      type: 'reference',
      to: [{type: 'imageIcon'}],
    }),
    defineField({
      name: 'logoDark',
      title: 'Logo Dark',
      type: 'reference',
      to: [{type: 'imageIcon'}],
    }),
    defineField({
      name: 'linksHubTitle',
      title: 'Links Hub Title',
      type: 'string',
    }),
    defineField({
      name: 'linksHubDescription',
      title: 'Links Hub Description',
      type: 'string',
    }),
    defineField({
      name: 'socialMediaIcons',
      title: 'Social Media Icons',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'imageIcon', weak: true}]}],
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'link'}],
        },
      ],
    }),
  ],
})
