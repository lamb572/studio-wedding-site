import {defineField, defineType} from 'sanity'

export const registry = defineType({
  name: 'registry',
  title: 'Registry',
  type: 'document',
  preview: {
    prepare: () => ({
      title: 'Registry',
    }),
  },
  fields: [
    defineField({
      name: 'registryHeading',
      title: 'Registry Heading',
      type: 'string',
    }),
    defineField({
      name: 'registryDetails',
      type: 'textBlock',
      title: 'Registry Details',
    }),
    defineField({
      name: 'qrCode',
      title: 'QR Code',
      type: 'image',
    }),
    defineField({
      name: 'registryLink',
      title: 'Registry Link',
      type: 'url',
    }),
  ],
})
