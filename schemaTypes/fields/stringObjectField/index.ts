import {defineField} from 'sanity'

export const stringObjectField = defineField({
  name: 'stringObjectField',
  title: 'String Object Field',
  type: 'object',
  fields: [
    defineField({
      name: 'string',
      title: 'String',
      type: 'string',
    }),
    defineField({
      name: 'typographyVariant',
      title: 'Typography Variant',
      type: 'string',
      initialValue: 'body1',
      options: {
        list: [
          {title: 'Heading 1', value: 'h1'},
          {title: 'Heading 2', value: 'h2'},
          {title: 'Heading 3', value: 'h3'},
          {title: 'Heading 4', value: 'h4'},
          {title: 'Heading 5', value: 'h5'},
          {title: 'Heading 6', value: 'h6'},
          {title: 'Body 1', value: 'body1'},
          {title: 'Body 2', value: 'body2'},
          {title: 'Button', value: 'button'},
          {title: 'Caption', value: 'caption'},
          {title: 'Inherit', value: 'inherit'},
          {title: 'Overline', value: 'overline'},
          {title: 'Subtitle 1', value: 'subtitle1'},
          {title: 'Subtitle 2', value: 'subtitle2'},
        ],
      },
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      initialValue: 'primary',
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
          {title: 'Success', value: 'success'},
          {title: 'Error', value: 'error'},
          {title: 'Info', value: 'info'},
          {title: 'Warning', value: 'warning'},
          {title: 'Text Primary', value: 'textPrimary'},
          {title: 'Text Secondary', value: 'textSecondary'},
          {title: 'Text Disabled', value: 'textDisabled'},
        ],
      },
    }),
  ],
})
