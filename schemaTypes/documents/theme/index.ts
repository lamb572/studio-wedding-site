import {defineField, defineType} from 'sanity'
import {ColorPicker} from '../../customComponents'

export const theme = defineType({
  name: 'theme',
  title: 'Theme',
  type: 'document',
  preview: {
    select: {
      title: 'name',
    },
  },
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'palette',
      title: 'Palette',
      type: 'object',
      fields: [
        defineField({
          name: 'mode',
          title: 'Mode',
          type: 'string',
          options: {list: ['light', 'dark']},
          initialValue: 'light',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'common',
          title: 'Common',
          type: 'object',
          fields: [
            defineField({
              name: 'black',
              title: 'Black',
              type: 'hexColorPicker',
              initialValue: '#000',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'white',
              title: 'White',
              type: 'hexColorPicker',
              initialValue: '#fff',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'primary',
          title: 'Primary',
          type: 'object',
          fields: [
            defineField({
              name: 'main',
              title: 'Main',
              type: 'hexColorPicker',
              initialValue: '#1976d2',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'light',
              title: 'Light',
              type: 'hexColorPicker',
              initialValue: '#42a5f5',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'dark',
              title: 'Dark',
              type: 'hexColorPicker',
              initialValue: '#1565c0',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'contrastText',
              title: 'Contrast Text',
              type: 'hexColorPicker',
              initialValue: '#fff',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'secondary',
          title: 'Secondary',
          type: 'object',
          fields: [
            defineField({
              name: 'main',
              title: 'Main',
              type: 'hexColorPicker',
              initialValue: '#9c27b0',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'light',
              title: 'Light',
              type: 'hexColorPicker',
              initialValue: '#ba68c8',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'dark',
              title: 'Dark',
              type: 'hexColorPicker',
              initialValue: '#7b1fa2',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'contrastText',
              title: 'Contrast Text',
              type: 'hexColorPicker',
              initialValue: '#fff',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'error',
          title: 'Error',
          type: 'object',
          fields: [
            defineField({
              name: 'main',
              title: 'Main',
              type: 'hexColorPicker',
              initialValue: '#d32f2f',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'light',
              title: 'Light',
              type: 'hexColorPicker',
              initialValue: '#ef5350',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'dark',
              title: 'Dark',
              type: 'hexColorPicker',
              initialValue: '#c62828',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'contrastText',
              title: 'Contrast Text',
              type: 'hexColorPicker',
              initialValue: '#fff',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'warning',
          title: 'Warning',
          type: 'object',
          fields: [
            defineField({
              name: 'main',
              title: 'Main',
              type: 'hexColorPicker',
              initialValue: '#ed6c02',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'light',
              title: 'Light',
              type: 'hexColorPicker',
              initialValue: '#ff9800',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'dark',
              title: 'Dark',
              type: 'hexColorPicker',
              initialValue: '#e65100',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'contrastText',
              title: 'Contrast Text',
              type: 'hexColorPicker',
              initialValue: '#fff',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'info',
          title: 'Info',
          type: 'object',
          fields: [
            defineField({
              name: 'main',
              title: 'Main',
              type: 'hexColorPicker',
              initialValue: '#0288d1',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'light',
              title: 'Light',
              type: 'hexColorPicker',
              initialValue: '#03a9f4',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'dark',
              title: 'Dark',
              type: 'hexColorPicker',
              initialValue: '#01579b',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'contrastText',
              title: 'Contrast Text',
              type: 'hexColorPicker',
              initialValue: '#fff',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'success',
          title: 'Success',
          type: 'object',
          fields: [
            defineField({
              name: 'main',
              title: 'Main',
              type: 'hexColorPicker',
              initialValue: '#2e7d32',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'light',
              title: 'Light',
              type: 'hexColorPicker',
              initialValue: '#4caf50',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'dark',
              title: 'Dark',
              type: 'hexColorPicker',
              initialValue: '#1b5e20',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'contrastText',
              title: 'Contrast Text',
              type: 'hexColorPicker',
              initialValue: '#fff',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
})
