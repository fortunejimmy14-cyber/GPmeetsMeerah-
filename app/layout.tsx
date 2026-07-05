import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mirabel & Godspower - Wedding Invitation",
  description: "A cinematic love story",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
