import {defineField, defineType} from 'sanity'

export const schedule = defineType({
  name: 'schedule',
  title: 'Schedule',
  type: 'document',
  preview: {
    select: {
      title: 'heading',
      subtitle: 'time',
    },
  },
  fields: [
    defineField({
      name: 'time',
      title: 'Time',
      type: 'datetime',
      initialValue: '2025-10-25T11:00:00Z',
    }),
    defineField({
      name: 'ceremony',
      title: 'Ceremony',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'details',
      type: 'array',
      title: 'Details',
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
      name: 'icon',
      title: 'Icon',
      type: 'iconPicker',
      options: {
        outputFormat: 'react',
        storeSvg: true,
      },
    }),
  ],
})
