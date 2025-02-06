import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parity",
  description: "Parity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative h-screen bg-black text-white overflow-x-hidden w-screen">
        {children}
      </body>
    </html>
  );
}
