import { Typography, TypographyProps } from '@positivo-pock/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Typography',
  component: Typography,
  args: {
    variant: 'displayMedium',
  },
  argTypes: {
    children: {
      name: 'Texto',
      type: 'string',
      defaultValue:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    variant: {
      options: ['displayMedium', 'displayLarge'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TypographyProps>

export const Text: StoryObj<TypographyProps> = {}
