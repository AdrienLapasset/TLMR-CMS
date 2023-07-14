import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {netlifyWidget} from 'sanity-plugin-dashboard-widget-netlify'
import {dashboardTool} from '@sanity/dashboard'

export default defineConfig({
  name: 'default',
  title: 'TLMR',

  projectId: 'i7u835te',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'Déploiement du site',
          sites: [
            {
              title: 'Site',
              apiId: 'ca554a79-fb7c-4d84-9df3-4df9efe20cae',
              buildHookId: '64b12f84e2305b066ccac6fb',
              name: 'tlmr-avocats',
              url: 'https://tlmr.netlify.app',
            },
          ],
        }),
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
