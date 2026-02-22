import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Lato } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-serif" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Doyle Wedding",
  description: "Juanita & Alexander - Wedding",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <meta name="viewport" content="viewport-fit=cover" />
      <body className="bg-wedding-almond font-sans text-wedding-scarlet">
        {children}
      </body>
    </html>
  );
}
