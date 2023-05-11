const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    darkMode:'class',
    theme: {
        extend: {
            colors: {
              'nudoRed':'#FF0000'
            }
        },
        screens: {
        'xs': '475px',
        ...defaultTheme.screens,
        },
    },
    plugins: [
    ],
}