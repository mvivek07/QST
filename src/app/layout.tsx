import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import HeaderLoader from "@/components/HeaderLoader";
import FooterLoader from "@/components/FooterLoader";
import StripExtensionAttrs from "@/components/StripExtensionAttrs";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "QuantumSight Technologies - Empower Your Surveillance",
  description: "Advanced surveillance solutions for home and corporate needs.",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased`} suppressHydrationWarning>
      <body className="bg-white" suppressHydrationWarning>
        <StripExtensionAttrs />
        <HeaderLoader />
        <main suppressHydrationWarning>{children}</main>
        <FooterLoader />
      </body>
    </html>
  );
}
