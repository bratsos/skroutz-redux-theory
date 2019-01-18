import theme from 'mdx-deck/themes'

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  font: 'Roboto, sans-serif',
  weights: ['300, 400, 500, 600, 700, 800, 900'],
  // custom colors
  colors: {
    text: '#404040',
    background: '#fafafa'
  }
}
