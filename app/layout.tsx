import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const outfit = localFont({
  src: [
    {
      path: "./fonts/outfit/Outfit-VariableFont_wght.ttf",
      style: "normal",
    },
  ],
  variable: "--font-outfit-local",
  display: "swap",
});

const youngSerif = localFont({
  src: [
    {
      path: "./fonts/young-serif/YoungSerif-Regular.ttf",
      style: "normal",
    },
  ],
  variable: "--font-young-serif-local",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Recipe Page",
  description: "Recipe Page using tailwind and nextjs",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${youngSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
