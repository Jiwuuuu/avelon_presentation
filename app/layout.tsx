import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avelon — Capstone Defense",
  description: "ITE 309 Capstone Project & Research 1 — System Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-gilroy overflow-hidden">
        {children}
      </body>
    </html>
  );
}
