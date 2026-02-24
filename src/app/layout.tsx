import type { Metadata } from "next";
import { Jost, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Mumblypeg — Underbelly",
  description:
    "Listen to Underbelly, the debut album by Mumblypeg. Rock, pop, funk, disco, and indie — all at once.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
