import {defineField, defineType} from 'sanity'

export const home = defineType({
  name: 'home',
  title: 'Home',
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
  ],
})
