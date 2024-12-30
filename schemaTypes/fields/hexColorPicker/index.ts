import {defineField} from 'sanity'
import {ColorPicker} from '../../customComponents'

export const hexColorPicker = defineField({
  name: 'hexColorPicker',
  title: 'Hex Color Picker',
  type: 'string',
  components: {
    input: ColorPicker,
  },
})
