import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Beantown Marketing Site',

  projectId: import.meta.env
    ? import.meta.env.SANITY_STUDIO_PROJECT_ID
    : process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: import.meta.env
    ? import.meta.env.SANITY_STUDIO_DATASET
    : process.env.SANITY_STUDIO_DATASET || '',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
