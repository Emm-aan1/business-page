module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'rgb(170, 108, 57)',
        brightRedLight: 'rgb(255, 178, 114)',
        brightRedSupLight: 'rgb(255, 197, 150)',
        darkBlue: 'rgb(46, 65, 114)',
        darkGrayishBlue: 'rgb(126, 148, 199)',
        veryDarkBlue: 'rgb(7, 16, 38)',
        veryPaleRed: 'rgb(170, 132, 57)',
        veryLightGray: 'rgb(34, 102, 102)',
      },
    },
  },
  plugins: [],
}
