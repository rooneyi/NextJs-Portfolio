import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Anek_Telugu } from "next/font/google"
import { cn } from "@/lib/utils";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const anekTelugu = Anek_Telugu({ subsets: ["telugu"],variable: "--font-caption" });

export const metadata: Metadata = {
  title: "Portfolio rooney",
  description: "Creator and sharing Developp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(geistSans.variable,geistMono.variable,anekTelugu,"h-full bg-background text-foreground")}
      >
        {children}
      </body>
    </html>
  );
}
