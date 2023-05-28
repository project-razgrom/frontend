/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/header/**/*.{js,ts,jsx,tsx,mdx}',
    './src/last-drops/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
    },
    colors: {
      'gray': {
        '900': '#262626',
        '800': '#000000',
        '700': '#393939'
        
      },
      'titles-color' : {
        '900' : '#C1C1C1'
      }
    }
  },
  plugins: [],
}
