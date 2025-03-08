import {defineField, defineType} from 'sanity'

export const registry = defineType({
  name: 'registry',
  title: 'Registry',
  type: 'document',
  preview: {
    prepare: () => ({
      title: 'Registry',
    }),
  },
  fields: [
    defineField({
      name: 'registryHeading',
      title: 'Registry Heading',
      type: 'string',
    }),
    defineField({
      name: 'registryDetails',
      type: 'array',
      title: 'Registry Details',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                type: 'object',
                name: 'color',
                fields: [
                  {
                    type: 'string',
                    name: 'color',
                    options: {
                      list: [
                        'textSecondary',
                        'primary',
                        'secondary',
                        'success',
                        'error',
                        'info',
                        'warning',
                        'textPrimary',
                        'textDisabled',
                      ],
                    },
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'qrCode',
      title: 'QR Code',
      type: 'image',
    }),
    defineField({
      name: 'registryLink',
      title: 'Registry Link',
      type: 'url',
    }),
  ],
})
