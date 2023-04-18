import { Typography, ThemeProvider } from '@positivo-poc/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'MaterialUi/Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: ['font.display.large', 'font.label.large'],
      control: { type: 'radio' },
      defaultValue: 'font.label.large',
    },
  },
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => (
  <ThemeProvider>
    <Typography {...args} />
  </ThemeProvider>
)

export const DisplayLarge = Template.bind({})

DisplayLarge.args = {
  children: 'The quick brown fox jumps',
}
