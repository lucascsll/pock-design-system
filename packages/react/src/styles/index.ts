import {
  space,
  radii,
  lineHeights,
  font,
  fontWeight,
  light,
  fonts,
} from '@positivo-pock/tokens'

import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors: light.color.pink,
    fontSizes: font,
    fontWeights: fontWeight,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
