import type { Metadata } from "next";
import "./globals.css";
import Nav from '../Components/Nav/nav';

export const metadata: Metadata = {
  title: "NEXT JS TRAINING MAY 2025",
  description: "TRAINING APP",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <header>
          <Nav />
        </header>
        {children}
      </body>
    </html>
  );
}
