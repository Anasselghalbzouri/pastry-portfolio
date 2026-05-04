import type { Metadata } from "next";
import "./globals.css";
import AmbientPlayer from "@/components/AmbientPlayer";
import ChatWidget from "@/components/ChatWidget";

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
      <body>
        {children}
        <AmbientPlayer />
        <ChatWidget />
      </body>
    </html>
  );
}
