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
      type: 'textBlock',
      title: 'Details',
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
