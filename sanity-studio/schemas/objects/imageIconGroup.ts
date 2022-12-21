import { defineField ,defineType} from "sanity";
export default defineType(
    {
    name:'imageIcongroup',
    title:'Image Icon Group',
    type:'object',
    fields:[
        defineField({
            name: 'name',
            title:'Name',
            type:'string'
        }),
        defineField({
            name: 'text',
            title:'Text',
            type:'string'
        }),
        ({
            name: 'icons',    
            title:'Icons',
            type:'array',
            of:[
                {
                    type:'imageIcon',
                   
                }
            ]

        }),

    ]

}
)