import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Newsletter Hero - Superpower Your Newsletter",
  description: "Transform your newsletter into a powerful engagement machine with AI-powered tools designed for creators. Get early access to our suite of newsletter tools.",
  keywords: "newsletter, AI tools, content creation, email marketing, newsletter generator",
  authors: [{ name: "Newsletter Hero" }],
  openGraph: {
    title: "Newsletter Hero - Superpower Your Newsletter",
    description: "Transform your newsletter into a powerful engagement machine with AI-powered tools designed for creators.",
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
