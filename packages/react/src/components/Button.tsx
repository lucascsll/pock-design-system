// import { styled, makeTheme } from '../styles'
// import React, { ComponentProps } from 'react'
import { ButtonProps, Button as MuiButton } from '@mui/material'

export function Button(props: ButtonProps) {
  return (
    <MuiButton className="button-variants" {...props}>
      <span>{props.children}</span>
    </MuiButton>
  )
}

// export interface TypographyProps extends ComponentProps<typeof ButtonCustom> {}
