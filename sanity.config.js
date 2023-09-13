import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
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
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'Déploiement du site',
          sites: [
            {
              title: 'Site',
              apiId: 'e6006a2b-088c-443c-ab29-c55a34f7a847',
              buildHookId: '6501b7f59e8d9a0ea9d2203d',
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
