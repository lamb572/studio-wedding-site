import {defineField, defineType} from 'sanity'

export const travel = defineType({
  name: 'travelAccommodation',
  title: 'Travel & Accommodation',
  type: 'document',
  preview: {
    prepare: () => ({
      title: 'Travel & Accommodation',
    }),
  },
  fields: [
    defineField({
      name: 'travelHeading',
      title: 'Travel Heading',
      type: 'string',
    }),
    defineField({
      name: 'travelDetails',
      type: 'textBlock',
      title: 'Travel Details',
    }),
    defineField({
      name: 'accommodationHeading',
      title: 'Accommodation Heading',
      type: 'string',
    }),
    defineField({
      name: 'accommodationDetails',
      type: 'textBlock',
      title: 'Accommodation Details',
    }),
  ],
})
