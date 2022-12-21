import { defineField ,defineType} from "sanity";
export default defineType(
    {
    name:'iconText',
    title:'Icon Text',
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
            type:'image'
        }),
        defineField({
            name: 'text',
            title:'Icon Text',
            type:'string'
        }),

    ]

}
)