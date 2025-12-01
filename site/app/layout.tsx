import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Code_Pro } from "next/font/google";
import "@/styles/globals.css";

import { Footer, Navbar } from "@/components/index";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceCode = Source_Code_Pro({
  variable: "--font-source-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CGI | Insights you can act on",
  description: "Founded in 1976, CGI is among the largest IT and business consulting services firms in the world. We are insights-driven and outcomes-focused to help accelerate returns on your investments.",
  icons: {
    icon: "/svgs/logo.svg",
    shortcut: "/svgs/logo.svg",
    apple: "/svgs/logo.svg",
  },
  openGraph: {
    title: "CGI | Insights you can act on",
    description: "Founded in 1976, CGI is among the largest IT and business consulting services firms in the world. We are insights-driven and outcomes-focused to help accelerate returns on your investments.",
    url: "https://www.cgi.com",
    siteName: "CGI",
    images: [
      {
        url: "/svgs/logo.svg",
        width: 800,
        height: 600,
        alt: "CGI Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CGI | Insights you can act on",
    description: "Founded in 1976, CGI is among the largest IT and business consulting services firms in the world. We are insights-driven and outcomes-focused to help accelerate returns on your investments.",
    images: ["/svgs/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourceCode.variable} antialiased`}
      >
        <main className="flex flex-col min-h-screen justify-between">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
