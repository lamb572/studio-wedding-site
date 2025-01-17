import {defineType} from 'sanity'

export const wedding = defineType({
  type: 'document',
  name: 'wedding',
  title: 'Wedding Details',
  preview: {
    select: {
      brideName: 'brideName',
      groomName: 'groomName',
    },
    prepare: ({brideName, groomName}) => {
      return {
        title: `${brideName} and ${groomName}`,
      }
    },
  },
  fields: [
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    },
    {
      type: 'string',
      name: 'brideName',
      title: 'Bride Name',
    },
    {
      type: 'string',
      name: 'groomName',
      title: 'Groom Name',
    },
    {
      type: 'string',
      name: 'brideImage',
      title: 'Bride Image',
    },
    {
      type: 'string',
      name: 'groomImage',
      title: 'Groom Image',
    },
    {
      type: 'string',
      name: 'brideDescription',
      title: 'Bride Description',
    },
    {
      type: 'string',
      name: 'groomDescription',
      title: 'Groom Description',
    },
  ],
})
