import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '../provider/theme-provider';
import { cn } from '../lib/utils';
import React from 'react';
import { LenisProvider } from '@/provider/lenis-provider';
import InitializeProvider from '@/provider/initialize-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransitionProvider from '@/provider/transition-provider';

const wanted = localFont({
  src: [
    {
      path: './fonts/wanted/WantedSans-Regular.woff2',
      weight: '400',
    },
    {
      path: './fonts/wanted/WantedSans-Medium.woff2',
      weight: '500',
    },
    {
      path: './fonts/wanted/WantedSans-SemiBold.woff2',
      weight: '600',
    },
    {
      path: './fonts/wanted/WantedSans-Bold.woff2',
      weight: '700',
    },
    {
      path: './fonts/wanted/WantedSans-ExtraBold.woff2',
      weight: '800',
    },
    {
      path: './fonts/wanted/WantedSans-Black.woff2',
      weight: '900',
    },
    {
      path: './fonts/wanted/WantedSans-ExtraBlack.woff2',
      weight: '950',
    },
  ],
  variable: '--font-wanted',
  display: 'swap',
});
export const metadata: Metadata = {
  title: 'Create Next App22',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={cn(wanted.variable, 'font-sans lenis')}>
      <body className="w-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          forcedTheme="light"
          disableTransitionOnChange
        >
          <LenisProvider>
            <Header />
            <InitializeProvider />
            <PageTransitionProvider>{children}</PageTransitionProvider>
            <Footer />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
