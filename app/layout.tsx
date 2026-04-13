import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "VALA Nightworker 35-Minute Somatic Reset Course",
  description:
    "A luxury waitlist landing page for nightlife women seeking a post-shift nervous system reset.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
