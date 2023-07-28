import { Open_Sans } from 'next/font/google';

const opensans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
  });

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" className={opensans.className}>
        <body>{children}</body>
      </html>
    );
  }
