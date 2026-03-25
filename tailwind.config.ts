import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{mdx,md}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bark: '#14332a',
        moss: '#6b9f39',
        reed: '#a6c96a',
        sand: '#efe7da',
        clay: '#b57b45',
        ink: '#15221d'
      },
      boxShadow: {
        soft: '0 24px 60px rgba(20, 51, 42, 0.12)'
      },
      backgroundImage: {
        'vetiver-radial':
          'radial-gradient(circle at top left, rgba(166, 201, 106, 0.28), transparent 42%), radial-gradient(circle at top right, rgba(20, 51, 42, 0.16), transparent 34%)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
