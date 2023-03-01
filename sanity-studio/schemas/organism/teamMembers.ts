import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'teamMembers',
  title: 'Team Members',
  type: 'object',
  fields: [
    defineField({
      name: 'memberName',
      title: 'Member Name',
      type: 'string',
    }),
    defineField({
      name: 'memberDesignation',
      title: 'Member Designation',
      type: 'string',
    }),
    defineField({
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
    }),
    defineField({
      name: 'socialMediaDetails',
      title: 'Images with Title',
      type: 'array',
      of: [
        {
          type: 'socialMediaIcon',
        },
      ],
    }),
  ],
})
