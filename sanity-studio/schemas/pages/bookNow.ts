import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'booknow',
  title: 'Book Now',
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
      name: 'logoDesktop',
      title: 'Logo Desktop',
      type: 'reference',
      to: [{type: 'imageIcon'}],
    }),
    defineField({
      name: 'footerLogo',
      title: 'Footer Logo',
      type: 'reference',
      to: [{type: 'imageIcon'}],
    }),
    defineField({
      name: 'bookNowTitle',
      title: 'Book NowTitle',
      type: 'string',
    }),
    defineField({
      name: 'bookNowUrl',
      title: 'Book Now Schedule Page Url',
      type: 'string',
    }),
    defineField({
      name: 'bookNowDescription',
      title: 'Book Now Description',
      type: 'string',
    }),
  ],
})
