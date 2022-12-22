

export default {
  name: 'aboutUs',
  type: 'document',
  title: 'About US',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    ({
      name: 'icons',    
      title:'Icons',
      type:'array',
      of:[
          {
              type:'reference',
              to:[{type: 'imageIcon' }]
          }
      ]

  }),
  ],
}
