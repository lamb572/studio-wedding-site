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
      name: 'subheading',
      title: 'SubHeading',
      type: 'stringObjectField',
    }),
    defineField({
      name: 'brideAndGroom',
      title: 'Bride and Groom',
      type: 'stringObjectField',
      initialValue: '${{brideName}} and ${{groomName}}',
      description:
        'string interpolation using bride and groom names Example: "${{brideName}} and ${{groomName}}"',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'stringObjectField',
    }),
    defineField({
      name: 'extraInfo',
      title: 'Extra Information',
      type: 'stringObjectField',
    }),
  ],
})
