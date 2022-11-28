import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'

const projectsDirectory = join(process.cwd(), '_projects')

export const getProjectsSlugs = () => {
    return fs.readdirSync(projectsDirectory)
}

export const getProjectBySlug = (slug: string, fields: string[] = []) => {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(projectsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    type Items = {
        [key: string]: string
    }

    const items: Items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if(field == 'slug'){
            items[field] = realSlug
        }

        if(field == 'content'){
            items[field] = content
        }

        if(typeof data[field] != 'undefined'){
            items[field] = data[field]
        }
    })

    return items
}

export const getAllProjects = (fields: string[] = []) => {
    const slugs = getProjectsSlugs()
    const projects = slugs
        .map((slug) => getProjectBySlug(slug, fields))
        // sort projects by date in descending ordeer
        .sort((project1, project2) => (Date.parse(project1.started) > Date.parse(project2.started) ? -1 : 1))
    return projects
}