import { defineField ,defineType} from "sanity";
export default defineType(
    {
    name:'links',
    title:'Links',
    type:'object',
    fields:[
        defineField({
            name: 'linkName',
            title:'Link Name',
            type:'string'
        }),
        defineField({
            name: 'hrefOfLink',
            title:'Link To',
            type:'string'
        }),
        defineField({
            name: 'newWindow',     //optional
            title:'Open With',
            type:'boolean'
        }),

    ]

}
)