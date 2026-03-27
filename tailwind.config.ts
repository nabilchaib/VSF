import fs from 'node:fs';
import type { Config } from 'tailwindcss';

const brandTokens = JSON.parse(fs.readFileSync('./data/brand/tokens.json', 'utf8')) as {
  brand: {
    colors: Record<string, string>;
  };
};

const brandColors = brandTokens.brand.colors;

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{mdx,md}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      opacity: Object.fromEntries(
        Array.from({ length: 99 }, (_, i) => [String(i + 1), String((i + 1) / 100)])
      ),
      colors: {
        bark: brandColors.deepGreen,
        moss: brandColors.secondary,
        reed: brandColors.surfaceMossAlt,
        sand: brandColors.surfaceMoss,
        clay: brandColors.primary,
        ink: brandColors.accent,
        primary: brandColors.primary,
        secondary: brandColors.secondary,
        surface: brandColors.surfaceMoss,
        surfaceAlt: brandColors.surfaceMossAlt,
        accent: brandColors.accent
      },
      boxShadow: {
        soft: '0 24px 60px rgba(35, 35, 35, 0.12)',
        card: '0 18px 48px rgba(35, 35, 35, 0.08)'
      },
      backgroundImage: {
        'vetiver-radial':
          'radial-gradient(circle at top left, rgba(117, 190, 43, 0.24), transparent 38%), radial-gradient(circle at top right, rgba(209, 217, 180, 0.56), transparent 34%), linear-gradient(180deg, rgba(255,255,255,1), rgba(250,252,244,1))',
        'brand-band':
          'linear-gradient(90deg, rgba(209,217,180,1), rgba(117,190,43,1))'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
