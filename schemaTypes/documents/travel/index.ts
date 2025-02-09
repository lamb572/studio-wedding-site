import {defineField, defineType} from 'sanity'

export const travel = defineType({
  name: 'travelAccommodation',
  title: 'Travel & Accommodation',
  type: 'document',
  preview: {
    prepare: () => ({
      title: 'Travel & Accommodation',
    }),
  },
  fields: [
    defineField({
      name: 'travelHeading',
      title: 'Travel Heading',
      type: 'string',
    }),
    defineField({
      name: 'travelDetails',
      type: 'array',
      title: 'Travel Details',
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
      name: 'accommodationHeading',
      title: 'Accommodation Heading',
      type: 'string',
    }),
    defineField({
      name: 'accommodationDetails',
      type: 'array',
      title: 'Accommodation Details',
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
  ],
})
