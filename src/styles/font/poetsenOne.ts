import { Poetsen_One } from 'next/font/google';

export const poetsenOne = Poetsen_One({
  subsets: ['latin'],
  weight: ['400'], // Poetsen One은 400(regular) 굵기만 제공합니다
  display: 'swap',
  preload: true,
  variable: '--font-poetsen-one',
  fallback: ['system-ui', 'arial'],
});

export default poetsenOne;
