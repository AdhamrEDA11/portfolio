import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import { LanguageProvider } from "@/lib/language-context";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const siteUrl = "https://adhamreda.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Adham Reda | Data Analyst Portfolio",
  description:
    "Data Analyst portfolio showcasing Python, SQL, Power BI, Excel, DAX, data cleaning, exploratory analysis, KPI reporting, and interactive dashboards.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Adham Reda | Data Analyst Portfolio",
    description:
      "Data Analyst portfolio showcasing Python, SQL, Power BI, Excel, DAX, data cleaning, exploratory analysis, KPI reporting, and interactive dashboards.",
    url: siteUrl,
    siteName: "Adham Reda — Data Analyst",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Adham Reda | Data Analyst Portfolio",
    description:
      "Data Analyst portfolio showcasing Python, SQL, Power BI, Excel, DAX, data cleaning, exploratory analysis, KPI reporting, and interactive dashboards."
  },
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <ScrollProgress />
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-accent-blue focus:px-4 focus:py-2 focus:text-white"
            >
              Skip to content
            </a>
            {children}
            <BackToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
