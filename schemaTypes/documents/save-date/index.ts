import {defineField, defineType} from 'sanity'

export const saveDate = defineType({
  name: 'saveDate',
  title: 'Save Date',
  type: 'document',
  preview: {
    select: {
      title: 'heading.string',
    },
  },
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'stringObjectField',
    }),
    defineField({
      name: 'context',
      type: 'array',
      title: 'Context',
      description:
        'string interpolation using bride and groom names Example: "${{brideName}} and ${{groomName}}"',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'extraInfo',
      title: 'Extra Information',
      type: 'stringObjectField',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
    }),
  ],
})
