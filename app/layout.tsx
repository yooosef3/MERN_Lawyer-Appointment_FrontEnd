import "./globals.css";

import LoaderProvider from "@/components/provider/LoaderProvider";
import type { Metadata } from "next";
import QueryProvider from "@/components/provider/QueryProvider";
import StoreProvider from "@/components/provider/StoreProvider";
import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "وکیل بگیر",
  description: "رزرو بهترین وکلا",
};

const font = localFont({
  src: "../public/fonts/BYekan/BYekan+.ttf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${font.className} max-w-screen-2xl mx-auto`}>
        <Toaster />
        <QueryProvider>
          <StoreProvider>
            <LoaderProvider />
            {children}
          </StoreProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
