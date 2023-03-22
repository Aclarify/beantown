import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'serviceMembershipCard',
  title: 'Membership Card',
  type: 'object',
  fields: [
    defineField({
      name: 'membershipIndex',
      title: 'Order Index',
      type: 'number',
    }),
    defineField({
      name: 'membershipTitle',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'membershipDescription',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'membershipPrice',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'membershipIcon',
      title: 'Membership Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'membershipSummaryItems',
      title: 'Membership Summary Items',
      type: 'array',
      of: [{type: 'checkableItem'}],
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'cta',
    }),
  ],
})
