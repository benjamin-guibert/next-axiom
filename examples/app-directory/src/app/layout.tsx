'use client';

import './globals.css';
import { useReportWebVitals } from 'next-axiom';

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useReportWebVitals();
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}