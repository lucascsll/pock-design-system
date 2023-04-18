import { TypographyProps, Typography as MuTypography } from '@mui/material'
import { colors, typescale, typeface } from '@positivo-poc/tokens'

export const TypographyVariants = {
  'font.display.large': {
    fontSize: typescale.size[11],
    letterSpacing: typescale.tracking[1],
    lineHeight: typescale.lineHeight[10],
    fontWeight: typeface.weight.medium,
    fontFamily: typeface.family.brand,
    color: colors.light.cyan.onPrimary,
  },
  'font.label.large': {
    fontSize: typescale.size[3],
    letterSpacing: typescale.tracking[2],
    lineHeight: typescale.lineHeight[2],
    fontWeight: typeface.weight.regular,
    fontFamily: typeface.family.brand,
    color: colors.light.cyan.onPrimary,
  },
}

export function Typography(props: TypographyProps) {
  return <MuTypography {...props}>{props.children}</MuTypography>
}

declare module '@mui/material/styles' {
  export interface TypographyVariants {
    'font.display.large': React.CSSProperties
    'font.label.large': React.CSSProperties
  }

  export interface TypographyVariantsOptions {
    'font.display.large'?: React.CSSProperties
    'font.label.large'?: React.CSSProperties
  }
}
declare module '@mui/material/Typography' {
  export interface TypographyPropsVariantOverrides {
    'font.display.large': true
    'font.label.large': true
    h3: false
    body1: false
  }
}
