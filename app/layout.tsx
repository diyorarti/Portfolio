import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Diyorbek Tirkashov - Data Scientist Portfolio',
  description: 'Data Scientist and Analyst Portfolio | SQL | Python | Business Intelligence',
  openGraph: {
    title: 'Diyorbek Tirkashov - Data Scientist',
    description: 'Data Scientist with expertise in SQL, Python, and Business Analytics',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-primary text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
