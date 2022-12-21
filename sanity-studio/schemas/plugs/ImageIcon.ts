import { defineField ,defineType} from "sanity";
export default defineType(
    {
    name:'imageIcon',
    title:'Image Icon',
    type:'object',
    fields:[
        defineField({
            name: 'iconName',
            title:'Icon Name',
            type:'string'
        }),
        defineField({
            name: 'icon',
            title:'Icon Image',
            type:'image',
            options: {
                hotspot: true,
              }
        }),
        defineField({
            name: 'text',
            title:'Icon Text',
            type:'string'
        }),
       
        defineField({
            name: 'href',
            title:'Href',
            type:'string'
        }),
        defineField({
            name: 'altText',
            title:'Alt Text',
            type:'string'
        }),

    ]

}
)