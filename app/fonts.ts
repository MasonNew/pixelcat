import { Press_Start_2P, VT323 } from 'next/font/google';

export const pixelFont = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
});

export const pixelOperatorFont = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel-operator',
});