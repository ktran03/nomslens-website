import type { Metadata } from "next";
import { lora, inter } from "@/lib/fonts";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nomlens.app"),
  title: {
    default: "NomLens — Han Nôm Decoder",
    template: "%s · NomLens",
  },
  description:
    "NomLens decodes Han Nôm script from photos of stone steles, temple inscriptions, and ancient manuscripts — on your iPhone, offline.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nomlens.app",
    siteName: "NomLens",
    title: "NomLens — Han Nôm Decoder",
    description:
      "Decode Han Nôm script on your iPhone, offline. 97.6% accuracy, <10ms inference.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NomLens — Han Nôm Decoder",
    description: "Decode Han Nôm script on your iPhone, offline.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
