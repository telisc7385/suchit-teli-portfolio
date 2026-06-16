import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suchitteli.dev"),
  title: "Suchit Teli | Full-Stack & Backend Engineer",
  description:
    "Professional developer portfolio for Suchit Teli, focused on scalable web apps, backend systems, and RAG/AI platforms.",
  openGraph: {
    title: "Suchit Teli | Full-Stack & Backend Engineer",
    description:
      "Building scalable apps, backend systems, and RAG/AI platforms.",
    url: "https://suchitteli.dev",
    siteName: "Suchit Teli Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suchit Teli | Full-Stack & Backend Engineer",
    description:
      "Building scalable apps, backend systems, and RAG/AI platforms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} scroll-smooth`}
    >
      <body className="bg-background text-foreground font-sans antialiased">
        <ThemeProvider>
          <div className="relative min-h-screen overflow-x-clip bg-background">
            <Navbar />
            {children}
            <WhatsAppButton />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
