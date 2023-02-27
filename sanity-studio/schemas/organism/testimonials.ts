import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'testimonialTitle',
      title: 'Testimonial Title',
      type: 'string',
    }),
    defineField({
      name: 'testimonialDescription',
      title: 'Testimonial Description',
      type: 'string',
    }),
    defineField({
      name: 'testimonialCardIcon',
      title: 'Testimonial Card Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'testimonialCards',
      title: 'Testimonial Cards',
      type: 'array',
      of: [
        {
          type: 'titleDescription',
        },
      ],
    }),
  ],
})
