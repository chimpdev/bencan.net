import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/main.css';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});

const bricolageGrotesque = localFont({
  src: '../fonts/BricolageGrotesque.ttf',
  variable: '--font-bricolage-grotesque',
  weight: '100 900'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bencan.net'),
  title: {
    template: '%s - bencan.net',
    default: 'bencan.net'
  },
  keywords: ['personal', 'blog', 'portfolio', 'projects'],
  description: 'My personal blog and portfolio website where I share my projects and thoughts on various topics.',
  openGraph: {
    title: 'bencan.net',
    description: 'My personal blog and portfolio website where I share my projects and thoughts on various topics.',
    type: 'website',
    locale: 'en_US',
    url: 'https://bencan.net',
    images: [
      {
        url: '/og.png',
        width: 960,
        height: 540
      }
    ]
  }
};

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${bricolageGrotesque.variable} font-geist text-primary antialiased`}>
        <div className='flex h-dvh flex-col px-6 sm:px-0'>
          {children}
        </div>
      </body>
    </html>
  );
}