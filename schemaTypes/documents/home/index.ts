import {defineField, defineType} from 'sanity'

export const home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  preview: {
    prepare: () => ({
      title: 'Home page',
    }),
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'string interpolation using bride and groom names Example: "${{brideName}} and ${{groomName}}"',
    }),
    defineField({
      name: 'distanceMessages',
      title: 'Distance to wedding message',
      type: 'object',
      description:
        'string interpolation using: ${{date}}. Date format is "[1..29] days ,[1..11] months"',
      fields: [
        defineField({
          name: 'upcoming',
          type: 'string',
          title: 'Wedding Upcoming message',
        }),
        defineField({
          name: 'past',
          type: 'string',
          title: 'Wedding happened message',
        }),
      ],
    }),
    defineField({
      name: 'location',
      type: 'textBlock',
      title: 'Location',
      description: 'string interpolation using: ${{date}}.',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
  ],
})
