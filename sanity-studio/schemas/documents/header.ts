import {defineField, defineType} from 'sanity'


export default defineType({
    name:'header',
    title:'Header Information',
    type:'document',
   
    fields:[
        defineField({
            name:'logoImage',
            title:'Logo Information',
            type : 'array',
            of  :[
                {type:'imageIcon'}]
    }),

        defineField({
                name:'navLinks',
                title:'Nav Links',
                type : 'array',
                of  :[
                    {type:'links'}]
        }),
        defineField({
            name:'navSubLinks',
            title:'Nav Link with Sub Links',
            type : 'array',
            of  :[
                {type:'linkGroup'}]
    }),


        defineField({
            name:  'headerTextImageContent',
            title: 'Header Text Image Information',
            type:  'array',
            
            of: [{
               
                type:'textImageContent',
                 }
            ]
        })
                    
        ] 
    })    
           
        
