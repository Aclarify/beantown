import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'serviceMembership',
  title: 'Service Category Membership',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Service Category Name',
      type: 'string',
    }),
    defineField({
      name: 'serviceMembershipCards',
      title: 'Service Membership Cards',
      type: 'array',
      of: [
        {
          type: 'serviceMembershipCard',
          validation: (Rule) => Rule.max(3),
        },
      ],
    }),
    defineField({
      name: 'serviceMembershipTitle',
      title: 'Service Membership Title',
      type: 'string',
    }),
    defineField({
      name: 'serviceMembershipDescription',
      title: 'Service Membership Description',
      type: 'portableText',
    }),
    defineField({
      name: 'serviceMembershipImage',
      title: 'Service Membership Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'serviceMembershipDetails',
      title: 'Service Membership Details Items',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
