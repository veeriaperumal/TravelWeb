import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import Header from '@/components/layout/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modern Website',
  description: 'Structured Next.js Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Global decorative background shapes for all pages */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div
            className="absolute left-0 top-0 h-[60vh] w-[45%] bg-[#F2C94C] opacity-20 hidden sm:block"
            style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' }}
          />
          <div
            className="absolute right-0 bottom-0 h-[40vh] w-[35%] bg-[#F2C94C] opacity-10 hidden md:block"
            style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }}
          />
        </div>

        {/* <Header /> */}
        <main className="min-h-screen relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}