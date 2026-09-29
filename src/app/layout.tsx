import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jennifer Zheng — Senior Software Engineer",
  description:
    "Portfolio of Jennifer Zheng, Senior Software Engineer based in New York. Experience at Microsoft, Meta, Google, and Amazon.",
  openGraph: {
    title: "Jennifer Zheng — Senior Software Engineer",
    description:
      "Building scalable systems and developer platforms across cloud, social, and AI.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
