import { defineField ,defineType} from "sanity";
export default defineType(
    {
    name:'linkGroup',
    title:'Link Group',
    type:'object',
    fields:[
        defineField({
            name: 'linkGroupName',
            title:'Link Group Name',
            type:'string'
        }),
       
        ({
            name: 'links',    
            title:'Sub Links',
            type:'array',
            of:[
                {
                    title:'Link',
                    type:'links',
                    
                }
            ]

        }),

    ]

}
)