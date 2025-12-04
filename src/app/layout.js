import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Use correct base for local dev vs GitHub Pages
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/react-search-filter' : '';
const siteUrl = isProd ? 'https://zkm.github.io' : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'React Search Filter',
    template: '%s | React Search Filter',
  },
  description:
    'A simple search/filter demo built with Next.js and Tailwind CSS.',
  applicationName: 'React Search Filter',
  keywords: ['Next.js', 'React', 'Search', 'Filter', 'Tailwind CSS'],
  authors: [{ name: 'zkm' }],
  alternates: {
    canonical: `${basePath}/`,
  },
  openGraph: {
    title: 'React Search Filter',
    description:
      'A simple search/filter demo built with Next.js and Tailwind CSS.',
    url: `${basePath}/`,
    siteName: 'React Search Filter',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'React Search Filter',
    description:
      'A simple search/filter demo built with Next.js and Tailwind CSS.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
