const theme = {
  colors: {
    white: '#FFF',
    black: '#000',
    lightBlue: '#42B4E2',
    gray: '#EBEBEB',
    textGray: '#BCBCBC'
  },
  rounded: {
    lg: '1rem'
  }
} as const

export default theme

export type Theme = typeof theme
