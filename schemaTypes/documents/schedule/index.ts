import {defineField, defineType} from 'sanity'

export const schedule = defineType({
  name: 'schedule',
  title: 'Schedule',
  type: 'document',
  preview: {
    select: {
      title: 'heading',
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
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'text',
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
