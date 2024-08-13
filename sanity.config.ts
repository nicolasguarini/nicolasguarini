import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/sanity/schemas'
import {codeInput} from '@sanity/code-input'
import { structure } from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'nicolasguarini.it',

  projectId: "qtdomht6",
  dataset: "production",

  plugins: [structureTool({ structure }), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
