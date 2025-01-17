import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ReactNode } from 'react';
import { Header } from '@/components/header';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface Props {
  children: ReactNode;
  team: ReactNode;
  dashboard: ReactNode;
}

export default function RootLayout({ children, team, dashboard }: Props) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />

        <main className="container mx-auto">
          <section className="py-6">{children}</section>

          <section className="flex gap-6">
            {team}
            {dashboard}
          </section>
        </main>
      </body>
    </html>
  );
}
