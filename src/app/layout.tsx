import type { Metadata } from 'next';
import ThemeRegistry from '@/theme/ThemeRegistry';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NexusBackground from '@/components/NexusBackground';
import './globals.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/500.css';
import '@fontsource/outfit/600.css';
import '@fontsource/outfit/700.css';

export const metadata: Metadata = {
  title: 'Namrata Jain — Software Engineer & Artist',
  description: 'Portfolio of Namrata Jain — Software Engineer at PensionBox, crafting modern web and mobile experiences. Also a painter at artwithease.',
  keywords: ['Namrata Jain', 'Software Engineer', 'Portfolio', 'React', 'Next.js', 'Full Stack Developer', 'artwithease'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#120f1f', minHeight: '100vh', position: 'relative' }}>
        <ThemeRegistry>
          <NexusBackground />
          <Navbar />
          <main style={{ minHeight: 'calc(100vh - 130px)' }}>
            {children}
          </main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
