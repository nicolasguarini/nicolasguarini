import type { Rule as RuleBuilder, SlugValidationContext } from 'sanity';

import { Rule } from '@sanity/types';

export default {
    name: 'project',
    type: 'document',
    title: 'Projects',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            validation: (rule: Rule) => rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
                isUnique: (value: string, context: SlugValidationContext) =>
                    context.defaultIsUnique(value, context),
            },
            validation: (rule: Rule) => rule.required(),
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
            name: 'categories',
            type: 'array',
            title: 'Categories',
            of: [{type: 'string'}],
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'featuredImage',
            type: 'image',
            title: 'Featured Image',
            options: {
                hotspot: true,
            },
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
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                            description: 'Describes the image for screen readers and search engines.',
                        },
                    ],
                },
            ]
        },
        {
            name: 'content',
            type: 'array', 
            title: 'Content', 
            of: [
                {type: 'block'},
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                            description: 'Describes the image for screen readers and search engines.',
                            validation: (Rule: RuleBuilder) => Rule.required().warning('Add alt text to keep the page accessible.'),
                        },
                    ],
                },
                {type: 'code'},
                {type: 'latex'}
            ]
        }
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'type',
            media: 'featuredImage',
        },
    },
}