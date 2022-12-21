import { defineField ,defineType} from "sanity";
export default defineType(
    {
    name:'textTitle',
    title:'Text Title Component',
    type:'object',
    fields:[
        defineField({
            name: 'titleText',
            title:'Title Text',
            type:'string'
        }),
        defineField({
            name: 'subText',
            title:'Sub Title Text',
            type:'string'
        }),

    ]

}
)