import { defineField ,defineType} from "sanity";
export default defineType(
    {
    name:'cta',
    title:'CTA',
    type:'object',
    fields:[
        defineField({
            name: 'text',
            title:'Button Text',
            type:'string'
        }),
        defineField({
            name: 'hrefOfButton',
            title:'Button href',
            type:'string'
        }),
        defineField({
            title: 'Button Type',
            name: 'buttonType',
            type: 'array',
            of: [{type: 'string'}],
            options: {
              list: [
                {title: 'Expand', value: 'expand'},
                {title: 'Collapse', value: 'collapse'},
                {title: 'Button', value: 'button'},
               
              ]
            }
          }),
        defineField({
            name: 'buttonTheme',
            title:'Button Theme',
            type:'string'
        }),


    ]

}
)