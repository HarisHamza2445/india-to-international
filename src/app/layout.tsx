import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { InstantAnchors } from "@/components/InstantAnchors";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://indiatointernational.in"),
  title: "India To International | NEET Medical Admissions & Advisory",
  description:
    "Authoritative, ethical, and data-backed counselling guidance for NEET UG, NEET PG and MDS aspirants across AIQ, Deemed, and State quotas. 19+ years of verified medical admissions expertise. Pune, Maharashtra.",
  keywords: [
    "NEET counselling",
    "NEET PG admissions",
    "NEET UG admissions",
    "medical college admission",
    "MCC counselling",
    "AIQ admissions",
    "state quota admissions",
    "India To International",
    "NEET MDS",
    "medical admissions Pune",
  ],
  authors: [{ name: "India To International" }],
  creator: "India To International",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "India To International | NEET Medical Admissions & Advisory",
    description:
      "19+ years of verified NEET counselling expertise. Get data-backed admission guidance for NEET PG, UG & MDS across AIQ, Deemed & State quotas.",
    siteName: "India To International",
    images: [
      {
        url: "/itoilogo.png",
        width: 800,
        height: 600,
        alt: "India To International — NEET Medical Admissions Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "India To International | NEET Medical Admissions & Advisory",
    description:
      "19+ years of verified NEET counselling expertise. Data-backed guidance for NEET PG, UG & MDS admissions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-ink">
        <InstantAnchors />
        {children}
      </body>
    </html>
  );
}
