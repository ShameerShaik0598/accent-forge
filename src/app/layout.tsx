import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "AccentForge",
  title: {
    default: "AccentForge",
    template: "%s | AccentForge",
  },
  description:
    "A mobile-first RP pronunciation practice app for Indian English speakers.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "AccentForge",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/icons/accentforge-icon.svg",
    apple: "/icons/accentforge-icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#1f7a63",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
