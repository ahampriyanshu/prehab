import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'prehab • a field manual on the human kinetic chain',
  description:
    'A quiet, analog book documenting human movement from first principles: from barefoot mechanics to primal movement, breathing, and somatic confidence.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#fcfbf9] text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
