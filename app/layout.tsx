import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";
import Link from "next/link";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FaithWatch",
  description: "Moments of reflection, peace, and growth.",
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
      className={`${lora.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
       <script defer src="https://cloud.umami.is/script.js" data-website-id="1eed8138-978d-460c-a0e2-7337e89baf8a"></script>
      </head>
      <body className="min-h-full flex flex-col font-serif bg-[#FDFBF7] dark:bg-[#1C1917] text-[#2C2A25] dark:text-[#E6E4DD] selection:bg-[#9A3412]/20 dark:selection:bg-[#FDBA74]/20">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex-1 flex flex-col max-w-3xl w-full mx-auto px-6 sm:px-12">
            <header className="flex items-center justify-between py-10 sm:py-16 border-b border-[#E5E2DA] dark:border-[#2E2C29]">
              <Link href="/" className="font-serif text-xl sm:text-2xl font-medium tracking-tight hover:opacity-80 transition-opacity">
                FaithWatch.
              </Link>
              <ThemeToggle />
            </header>
            <main className="flex-1 py-12">
              {children}
            </main>
            <footer className="py-10 border-t border-[#E5E2DA] dark:border-[#2E2C29] mt-auto">
              <p className="text-center text-sm font-sans text-[#78716C] dark:text-[#A8A29E]">
                © {new Date().getFullYear()} FaithWatch. All rights reserved.
              </p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

