import localFont from 'next/font/local';
import '@/styles/main.css';
import generateMetadata from '@/utils/generateMetadata';
import { ViewTransitions } from 'next-view-transitions';

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

export const metadata = generateMetadata();

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <body className={`${geistSans.variable} ${bricolageGrotesque.variable} font-geist text-primary antialiased`}>
          <div className='flex h-dvh flex-col px-6 sm:px-0'>
            {children}
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}