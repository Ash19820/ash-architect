import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TOPE ARCHITECTS — More Than Space",
  description: "Internationally renowned multidisciplinary architecture and spatial design studio based in Istanbul.",
  keywords: ["architecture", "spatial design", "interiors", "editorial architecture", "tope architects"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-[#060606] text-[#f2f2f2]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;1,300&family=Syne:wght@400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#060606] text-[#f2f2f2] antialiased selection:bg-[#9BD4D7] selection:text-black">
        {children}
      </body>
    </html>
  );
}
