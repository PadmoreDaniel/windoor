import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BUSINESS_NAME, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: BUSINESS_NAME,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "/",
    siteName: BUSINESS_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/g-1-slider_i-1_processed.jpg",
        width: 1920,
        height: 765,
        alt: "Windoor Repairs & Services - repair and service of all windows and doors in Co. Donegal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/g-1-slider_i-1_processed.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#174883",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IE">
      <body>{children}</body>
    </html>
  );
}
