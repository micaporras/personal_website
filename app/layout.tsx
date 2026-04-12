import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "mclrrn",
  description: "A portfolio website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image" aria-label="website logo" href="/images/logo.png"/>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
