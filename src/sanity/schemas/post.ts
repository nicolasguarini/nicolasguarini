import { Rule } from '@sanity/types';

export default {
    name: 'post',
    type: 'document',
    title: 'Posts',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (rule: Rule) => rule.required(),
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96,
                isUnique: (value: string, context: any) => context.defaultIsUnique(value, context),
            },
            validation: (rule: Rule) => rule.required(),
        },
        {
            name: 'excerpt',
            type: 'text',
            title: 'Excerpt',
            validation: (rule: Rule) => rule.required().max(200),
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
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published At',
            validation: (rule: Rule) => rule.required(),
        },
        {
            name: 'categories',
            type: 'array',
            title: 'Categories',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'content',
            type: 'array', 
            title: 'Content', 
            of: [
                {type: 'block'},
                {type: 'image'},
                {type: 'code'}
            ]
        }
    ],
    preview: {
        select: {
            title: 'title',
            media: 'featuredImage',
        },
    },
};