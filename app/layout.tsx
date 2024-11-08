import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";


export const metadata: Metadata = {
  title: "getLinked - pHoenixDev",
  description: "A web app for built with Next.js and Tailwind with TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-deep-BG"
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
