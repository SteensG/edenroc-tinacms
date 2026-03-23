import { defineConfig } from 'tinacms'

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main'

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? null,
  token: process.env.TINA_TOKEN ?? null,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'pagina',
        label: 'Pagina inhoud',
        path: 'content',
        format: 'json',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: 'object',
            name: 'hero',
            label: 'Hero sectie',
            fields: [
              {
                type: 'string',
                name: 'titel',
                label: 'Titel',
              },
              {
                type: 'string',
                name: 'subtitel',
                label: 'Subtitel',
                ui: { component: 'textarea' },
              },
            ],
          },
          {
            type: 'object',
            name: 'contact',
            label: 'Contact',
            fields: [
              {
                type: 'string',
                name: 'naam',
                label: 'Naam adviseur',
              },
              {
                type: 'string',
                name: 'telefoon',
                label: 'Telefoonnummer',
              },
              {
                type: 'string',
                name: 'email',
                label: 'E-mailadres',
              },
            ],
          },
        ],
      },
    ],
  },
})
