import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600'],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "茅ヶ崎のホームページ屋さん",
  description: "A refined showcase of elegant web design and artistic productions",
  keywords: ["portfolio", "web design", "fine art", "creative", "elegant"],
  authors: [{ name: "Creative Artist" }],
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${cormorantGaramond.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
