import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ravi Ladumor | Full Stack Developer",
  description: "Portfolio of Ravi Ladumor. Building high-performance, visually stunning web applications and robust scalable architectures.",
  openGraph: {
    title: "Ravi Ladumor | Full Stack Developer",
    description: "Portfolio of Ravi Ladumor. Building high-performance, visually stunning web applications.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030303] text-white antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
