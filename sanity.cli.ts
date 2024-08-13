import {defineCliConfig} from 'sanity/cli'
import { dataset, projectId } from './src/sanity/env'

export default defineCliConfig({
  api: {
    projectId: "qtdomht6",
    dataset: "production"
  }
})
