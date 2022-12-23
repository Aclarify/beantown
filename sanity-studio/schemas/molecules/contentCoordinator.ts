// import {FaExternalLinkAlt} from '@react-icons/all-files/fa/FaExternalLinkAlt'
// import {FaLink} from '@react-icons/all-files/fa/FaLink'
// -- TODO: Check for sanity 3
import {defineField} from 'sanity'

export default {
  name: 'contentCoordinator',
  title: 'ContentCoordinator',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title Text',
      type: 'string',
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'internalLink',
                type: 'link',
                title: 'Internal link',
                // blockEditor: {
                //   icon: FaLink,
                // },
              },
              {
                title: 'External Link',
                name: 'externalLink',
                type: 'object',
                // blockEditor: {
                //   icon: FaExternalLinkAlt,
                // },
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                    validation: (Rule) =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ['https', 'http', 'mailto', 'tel'],
                      }),
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'breakType',
        },
      ],
    }),
    defineField({
      name: 'highlightText',
      title: 'Highlight Text',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'breakType',
        },
      ],
    }),
  ],
}
