import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getSession } from '@/lib/auth';
import NextAuthSessionProvider from '@/components/providers/session-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin Dashboard - Task Management',
  description: 'Comprehensive task management dashboard for administrators',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider session={session}>
          {children}
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
