import {defineField, defineType} from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  preview: {
    prepare: () => ({
      title: 'Settings',
    }),
  },

  fields: [
    defineField({
      name: 'background',
      title: 'Background',
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
        }),
        defineField({
          name: 'color',
          title: 'Color',
          type: 'hexColorPicker',
        }),
      ],
    }),
    defineField({
      name: 'pageNames',
      title: 'Page Name',
      type: 'object',
      fields: [
        defineField({
          name: 'home',
          title: 'Home',
          type: 'string',
          initialValue: 'Home',
        }),
        defineField({
          name: 'schedule',
          title: 'Schedule',
          type: 'string',
          initialValue: 'Schedule',
        }),
        defineField({
          name: 'travel',
          title: 'Travel & Accommodation',
          type: 'string',
          initialValue: 'Travel & Accommodation',
        }),
        defineField({
          name: 'rsvp',
          title: 'RSVP',
          type: 'string',
          initialValue: 'RSVP',
        }),
        defineField({
          name: 'faq',
          title: 'FAQ',
          type: 'string',
          initialValue: 'FAQ',
        }),
        defineField({
          name: 'registry',
          title: 'Registry',
          type: 'string',
          initialValue: 'Registry',
        }),
      ],
    }),
  ],
})
