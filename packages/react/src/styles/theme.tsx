import {
  createTheme,
  ThemeProvider as MaterialThemeProvider,
} from '@mui/material/styles'
import { colors } from '@positivo-poc/tokens'
import { TypographyVariants } from '../components'

interface themeProps {
  paleta?: string
}

export function ThemeProvider({
  children,
  paleta,
}: themeProps & { children: React.ReactNode }) {
  const theme = createTheme({
    palette: {
      primary: { main: colors.light.pink.primary },
      secondary: { main: colors.light.cyan.primary },
    },
    typography: {
      ...TypographyVariants,
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            'font.display.large': 'h1',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          text: {
            ':disabled': {
              color: 'rgba(23, 25, 28, 0.08)',
              background: 'none',
            },
          },
          contained: {
            ':disabled': {
              background: 'red',
            },
            '&.button-variants': {
              background: colors.light.pink.primary,
              position: 'relative',
              overflow: 'hidden',
            },
            '&.button-variants > span': {
              position: 'relative',
              zIndex: 0,
            },
            '&.button-variants::before': {
              content: '""',
              position: 'absolute',
              zIndex: 0,
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              background: colors.light.pink.onPrimary,
              opacity: 0,
            },
            '&.button-variants:hover::before': {
              opacity: 0.08,
            },
          },
        },
      },
    },
  })

  return <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
}
