import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/sanity/schemas'
import { dataset, projectId } from './src/sanity/env'

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'nicolasguarini.it',

  projectId: projectId,
  dataset: dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
