import type { Metadata } from "next";
import { DM_Sans, Roboto } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "PentAi",
  description:
    "PentAi landing page — Lorem ipsum dolor sit amet consectetur.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${roboto.variable}`}>
      <body className="min-h-screen overflow-x-hidden antialiased">{children}</body>
    </html>
  );
}
