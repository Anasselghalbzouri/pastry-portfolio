import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import AmbientPlayer from "@/components/AmbientPlayer";
import ChatWidget from "@/components/ChatWidget";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata: Metadata = {
  title: "Reda El Ghalbzouri — Pastry Trainee",
  description:
    "Pastry trainee seeking stage opportunities in Michelin-level kitchens. Discipline. Precision. Repetition.",
  keywords: ["pastry", "chef", "trainee", "Michelin", "entremets", "pâtisserie"],
  openGraph: {
    title: "Reda El Ghalbzouri — Pastry Trainee",
    description:
      "Building skills. One detail at a time. Seeking stage opportunities in Michelin-level kitchens.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-966WF53CHQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-966WF53CHQ');
          `}
        </Script>
      </head>
      <body>
        <LanguageProvider>
          {children}
          <AmbientPlayer />
          <ChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
