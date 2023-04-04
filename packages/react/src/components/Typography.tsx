import { styled } from '../styles'
import { ComponentProps } from 'react'

export const Typography = styled('p', {
  variants: {
    variant: {
      displayLarge: {
        fontSize: '$xl',
        lineHeight: '$displayLarge',
        fontFamily: '$brand',
        fontWeight: '$regular',
      },
      displayMedium: {
        fontSize: '$md',
        lineHeight: '$displayMedium',
        fontFamily: '$brand',
        fontWeight: '$regular',
      },
    },
  },
  defaultVariants: {
    variant: 'displayMedium',
  },
})

export interface TypographyProps extends ComponentProps<typeof Typography> {}
