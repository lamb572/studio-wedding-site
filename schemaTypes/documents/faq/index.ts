import {defineField, defineType} from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: "FAQ's",
  type: 'document',
  preview: {
    select: {
      title: 'question',
    },
  },
  fields: [
    defineField({
      name: 'position',
      title: 'Position',
      type: 'number',
    }),
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
        // providers: ['mdi', 'sa', 'fi', 'hi'],
        outputFormat: 'react',
        storeSvg: true,
      },
    }),
  ],
})
