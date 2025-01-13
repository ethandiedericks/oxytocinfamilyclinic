import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title:
    'Oxytocin Family Clinic | Professional Midwife-Led Maternity Care in Gqeberha',
  description:
    "Expert maternity care in Gqeberha, offering midwife-led services, antenatal care, home births, and women's wellness. Specializing in pregnancy support, doula services, and postnatal care with over 20 years of experience.",
  keywords: [
    'maternity clinic Gqeberha',
    'midwife services',
    'antenatal care',
    'home birth',
    'doula services',
    'postnatal care',
    'breastfeeding support',
    'pregnancy classes',
    "women's wellness",
    'baby wellness',
    'Port Elizabeth maternity',
    'professional midwives',
    'HIV/AIDS counseling',
    'blood testing pregnancy',
    'miscarriage support',
  ],
  authors: [{ name: 'Oxytocin Family Clinic' }],
  creator: 'Oxytocin Family Clinic',
  publisher: 'Oxytocin Family Clinic',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://oxytocinfamilyclinic.co.za',
    title: 'Oxytocin Family Clinic | Professional Maternity Care in Gqeberha',
    description:
      "Comprehensive maternity and women's healthcare services in Gqeberha. Expert midwives, doulas, and wellness professionals providing personalized care throughout your pregnancy journey.",
    siteName: 'Oxytocin Family Clinic',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://oxytocinfamilyclinic.co.za',
  },
  category: 'Healthcare',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
