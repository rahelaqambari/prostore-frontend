import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree, Inter } from "next/font/google";
import "./globals.css";
import { APP_NAME } from "../../constants";
import { cn } from "@/lib/utils";
import Header from "@/components/ui/shared/header";
import Footer from "./(root)/Products/footer";
import { ThemeProvider } from "next-themes";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
    absolute: APP_NAME
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased --font-sans", )}
    >
      <body >
      <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      >
    {children}
    </ThemeProvider>
    </body>
    </html>
  );
}
