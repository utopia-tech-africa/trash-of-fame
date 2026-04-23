import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
});

export const metadata: Metadata = {
  title: "Trash Of Fame",
  description: "Reduce, Reuse, Recycle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", epilogue.variable, "font-epilogue")}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
