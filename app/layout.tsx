import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andre Sihombing | Frontend Developer & Software Engineer",
  description:
    "Andre Sihombing is an experienced Frontend Developer and Software Engineer with expertise in React.js, React Native, Laravel, TypeScript, and modern web technologies. Available for freelance and full-time projects.",
  keywords: [
    "Andre Sihombing",
    "Frontend Developer",
    "Software Engineer",
    "React Developer",
    "React Native Developer",
    "Laravel Developer",
    "TypeScript",
    "JavaScript",
    "Web Developer Indonesia",
    "Mobile Developer",
    "Portfolio",
  ],
  authors: [{ name: "Andre Sihombing", url: "https://andresihombing.dev" }],
  creator: "Andre Sihombing",
  publisher: "Andre Sihombing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andresihombing.dev",
    title: "Andre Sihombing | Frontend Developer & Software Engineer",
    description:
      "Experienced Frontend Developer with expertise in React.js, React Native, Laravel, and TypeScript. Check out my portfolio and projects.",
    siteName: "Andre Sihombing Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Andre Sihombing - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andre Sihombing | Frontend Developer",
    description:
      "Experienced Frontend Developer with expertise in React.js, React Native, Laravel, and TypeScript.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://andresihombing.dev",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Andre Sihombing",
  url: "https://andresihombing.dev",
  email: "andrehombing140@gmail.com",
  telephone: "+6285928864477",
  jobTitle: "Frontend Developer",
  description:
    "Software developer with strong problem solving skills, experienced in React.js, React Native, Laravel, TypeScript, and modern web technologies.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tapanuli Utara",
    addressRegion: "Sumatera Utara",
    addressCountry: "ID",
  },
  sameAs: [
    "https://www.linkedin.com/in/andre-sihombing",
    "https://github.com/andresihombing",
  ],
  knowsAbout: [
    "React.js",
    "React Native",
    "Laravel",
    "TypeScript",
    "JavaScript",
    "PHP",
    "MySQL",
    "Redux",
    "Angular",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#f97316" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased bg-[#0a0a0a] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
