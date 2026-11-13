import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haath",
  description: "A trusted local network for workers and the people who hire them in Hyderabad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
