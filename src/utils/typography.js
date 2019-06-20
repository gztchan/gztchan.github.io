import Typography from "typography"

const family = ['Lora', 'Noto Serif SC', 'Geogria', 'Songti SC', 'serif'];

const typography = new Typography({
  googleFonts: [
    { name: 'Lora', styles: ['200', '400', '600'] },
    { name: 'Noto Serif SC', styles: ['200', '400', '600'] },
  ],
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: family,
  bodyFontFamily: family,
  // See below for the full list of options.
  overrideStyles: ({ rhythm }, options, styles) => ({
    h1: { fontSize: '32px', fontWeight: '600' },
    h2: { fontSize: '24px', fontWeight: '600' },
    h3: { fontSize: '20px', fontWeight: '600' },
    a: { color: '#FF570D', fontWeight: 600, textDecoration: 'none' },
    blockquote: {
      fontSize: '0.85rem',
      fontStyle: 'italic',
      backgroundColor: '#f7f7f7',
      margin: '1rem 0',
      padding: rhythm(13/16),
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
  })
})

export const { scale, rhythm, options } = typography
export default typography
