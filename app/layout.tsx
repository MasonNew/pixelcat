import './globals.css';
import type { Metadata } from 'next';
import { pixelFont, pixelOperatorFont } from './fonts';

export const metadata: Metadata = {
  title: 'Pink Pixel Cat',
  description: 'A whimsical pixel art world of the Pink Pixel Cat',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pixelFont.variable} ${pixelOperatorFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
