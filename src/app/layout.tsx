import type { Metadata } from "next";
import { fontInter } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s | UrbanElegance',
    default: 'UrbanElegance',
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontInter.className} antialiased`}>{children}</body>
    </html>
  );
}
