import {defineField} from 'sanity'

export const breakType = {
  name: 'breakType',
  type: 'object',
  title: 'Break',
  fields: [
    defineField({
      name: 'style',
      type: 'string',
      title: 'Break style',
      options: {
        list: [{title: 'Line break', value: 'lineBreak'}],
      },
    }),
  ],
}
