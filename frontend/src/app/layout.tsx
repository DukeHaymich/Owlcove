import type { Metadata } from 'next';
import '@/public/globals.css';

export const metadata: Metadata = {
  title: 'Owlcove Bistro',
  description: 'Owlcove Bistro',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
