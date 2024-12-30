import {Stack, TextInput} from '@sanity/ui'
import {set, StringInputProps, unset} from 'sanity'

export function ColorPicker({onChange, value = '', elementProps}: StringInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    console.log(value)
    onChange(value ? set(value) : unset())
  }
  return (
    <Stack
      style={{
        width: '100px',
      }}
    >
      <TextInput
        {...elementProps}
        type="color"
        onChange={handleChange}
        onClear={() => onChange(unset())}
        value={value}
        clearButton
        style={{
          width: '100px',
          height: ' 40px',
        }}
      />
    </Stack>
  )
}
