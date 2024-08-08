import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/sanity/schemas'
import { dataset, projectId } from './src/sanity/env'
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'nicolasguarini.it',

  projectId: projectId,
  dataset: dataset,

  plugins: [structureTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
