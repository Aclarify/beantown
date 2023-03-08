import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'checkableItem',
  title: 'Checkable Item',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Item Text',
      type: 'string',
    }),
    defineField({
      name: 'isActivated',
      title: 'Is Activated?',
      type: 'boolean',
    }),
  ],
})
