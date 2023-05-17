import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {crossDatasetDuplicator} from '@sanity/cross-dataset-duplicator'
import {schemaTypes} from './schemas'

export default defineConfig([
  {
    name: 'develop-workspace',
    title: 'Develop Workspace',
    basePath: '/develop',
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
    dataset: 'develop',
    plugins: [
      deskTool(),
      visionTool(),
      crossDatasetDuplicator({
        // Required settings to show document action
        types: [],
        // Optional settings
        tool: true,
        follow: [],
      }),
    ],
    schema: {
      types: schemaTypes,
    },
  },
  {
    name: 'production-workspace',
    title: 'Production Workspace',
    basePath: '/production',
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
    dataset: 'production',
    plugins: [
      deskTool(),
      visionTool(),
      crossDatasetDuplicator({
        // Required settings to show document action
        types: [],
        // Optional settings
        tool: true,
        follow: [],
      }),
    ],
    schema: {
      types: schemaTypes,
    },
  },
])
