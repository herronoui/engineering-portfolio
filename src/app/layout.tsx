import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Herron Nguyen · Engineering Portfolio",
  description:
    "Mechanical engineering projects in robotics, control, and fabrication — Stanford CHARM Lab, AA 273, and more.",
  openGraph: {
    title: "Herron Nguyen · Engineering Portfolio",
    description:
      "Robotics research, state estimation, and hands-on mechanical design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sans.variable} ${mono.variable} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
