import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "One World, One Chance",
  description: "An alien discovers a golden record containing the complete rise and fall of human civilization.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
