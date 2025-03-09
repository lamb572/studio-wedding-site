import {defineField} from 'sanity'

export const textBlock = defineField({
  name: 'textBlock',
  title: 'Text Block',
  type: 'array',
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
          {
            type: 'object',
            name: 'link',
            fields: [
              {
                type: 'string',
                name: 'href',
              },
            ],
          },
        ],
      },
    },
  ],
})
