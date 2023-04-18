import { Button, ThemeProvider } from '@positivo-poc/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'MaterialUi/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['text', 'contained', 'outlined'],
      control: { type: 'radio' },
      defaultValue: 'contained',
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeProvider>
    <Button {...args} />
  </ThemeProvider>
)

export const FilledButtons = Template.bind({})
export const OutlinedButtons = Template.bind({})
export const TextButtons = Template.bind({})
export const ElevatedButtons = Template.bind({})
export const TonalButtons = Template.bind({})

// export const Text: StoryObj<TypographyProps> = {}

// batata.parameters = {
//   controls: {
//     include: ['variant', 'children', 'disabled', 'fullWidth', 'size'],
//   },
// }

FilledButtons.args = {
  children: 'Enabled',
  disabled: false,
}

OutlinedButtons.args = {
  children: 'Hovered',
  disabled: false,
}
OutlinedButtons.argTypes = {
  variant: {
    defaultValue: 'outlined',
  },
}

TextButtons.args = {
  children: 'Hovered',
  disabled: false,
}

ElevatedButtons.args = {
  children: 'Hovered',
  disabled: false,
}

TonalButtons.args = {
  children: 'Hovered',
  disabled: false,
}
