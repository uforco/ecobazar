import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FooterSection from "@/components/shared/footersection/FooterSection";
import HeaderSection from "@/components/shared/header/HeaderSection";
import ReduxProvider from "@/redux/ReduxProvider";
import AuthProvider from "@/components/AuthProvider";

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

export const metadata: Metadata = {
  title: "Ecobazar",
  description: "Ecobazar - food and vegetable online e-commerce site ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} w-full antialiased`}
        >
          <AuthProvider>
            <ReduxProvider>
              <HeaderSection />
              {children}
              <FooterSection></FooterSection>
            </ReduxProvider>
          </AuthProvider>
        </body>
      </html>
  );
}
