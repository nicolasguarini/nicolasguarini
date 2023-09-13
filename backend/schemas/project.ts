export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
                isUnique: (value: string, context: any) => context.defaultIsUnique(value, context),
            },
            validation: (rule: any) => rule.required(),
        },
        {
            name: 'excerpt',
            type: 'string',
            title: 'Excerpt',
        },
        {
            name: 'service',
            type: 'string',
            title: 'Service',
        },
        {
            name: 'type',
            type: 'string',
            title: 'Type',
            options: {
                list: [
                    {title: 'Personal', value: 'personal'},
                    {title: 'Client', value: 'client'}
                ],
                layout: 'radio'
            }
        },
        {
            name: 'startedDate',
            type: 'date',
            title: 'Started Date'
        },
        {
            name: 'finishedDate',
            type: 'date',
            title: 'Finished Date',

        },
        {
            name: 'url',
            type: 'url',
            title: 'URL',
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{type: 'image'}]
        },
        {
            name: 'content',
            type: 'array', 
            title: 'Content', 
            of: [{type: 'block'}]
        }
    ]
}