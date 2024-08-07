"use client"

import { Inter } from "next/font/google";
import "./globals.css";

import { GoogleOAuthProvider } from '@react-oauth/google'
import Header from '@components/Header'


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <GoogleOAuthProvider clientId="">
          <Header />
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
