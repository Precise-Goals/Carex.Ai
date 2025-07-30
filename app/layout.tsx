import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

<<<<<<< HEAD
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
=======
import "./globals.css";
import Provider from "./provider";

>>>>>>> 3b9121cbd8d32815f6e881aa17ca5bcaa56c6e91

export const metadata: Metadata = {
  title: "Carex Ai | Falcons",
  description:
    "AI Docter voice agent which can help you to get the best treatment for your health",
  keywords: ["keyword1", "keyword2"],
  authors: [{ name: "Your Name" }],
  creator: "Falcons",
  publisher: "Team Falcons",
  robots: "index, follow",
  openGraph: {
    title: "Carex Ai | Falcons",
    description:
      "AI Docter voice agent which can help you to get the best treatment for your health",
    siteName: "Your Site",
    images: [
      {
        url: "https://i.ibb.co/hxMMS8Cb/Screenshot-2025-07-27-011710.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // https://i.ibb.co/bMZ6rKLN/Screenshot-2025-07-27-011740.png
  twitter: {
    card: "summary_large_image",
    title: "Carex Ai | Falcons",
    description:
      "AI Docter voice agent which can help you to get the best treatment for your health",
    images: ["https://i.ibb.co/hxMMS8Cb/Screenshot-2025-07-27-011710.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
<<<<<<< HEAD
          className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
=======
>>>>>>> 3b9121cbd8d32815f6e881aa17ca5bcaa56c6e91
          suppressHydrationWarning={true}
        >
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
