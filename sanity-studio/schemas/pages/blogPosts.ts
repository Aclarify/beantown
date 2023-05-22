import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPosts',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'blogTitle',
      title: 'Blog Title',
      type: 'string',
    }),
    defineField({
      name: 'blogImage',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'blogSlug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'blogContent',
      title: 'Blog Post Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'H5', value: 'h5'},
            {title: 'H6', value: 'h6'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
            ],
          },
        },
        {
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'blogTags',
      title: 'Blog Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'categories'}],
        },
      ],
    }),
    defineField({
      name: 'views',
      title: 'Number of views',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      hidden: true,
      initialValue: new Date().toISOString(),
    }),
  ],
})
