import {defineField, defineType} from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: "FAQ's",
  type: 'document',
  preview: {
    select: {
      title: 'heading.string',
    },
  },
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'FAQ icon',
      type: 'iconPicker',
      options: {
        providers: ['mdi'],
        outputFormat: 'react',
      },
    }),
  ],
})
