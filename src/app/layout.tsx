import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { getSiteUrl } from "@/utils/site";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
    preload: true
});

export const metadata: Metadata = {
    metadataBase: new URL(getSiteUrl()),
    title: {
        default: "Liam Pham | Front-End Developer, React & Next.js Portfolio",
        template: "%s | Liam Pham"
    },
    description:
        "Liam Pham is a front-end developer building responsive, accessible, SEO-friendly websites and web applications with React, Next.js, TypeScript, and Tailwind CSS.",
    keywords: [
        "Liam Pham",
        "Front-End Developer Portfolio",
        "React Developer",
        "Next.js Developer",
        "TypeScript Developer",
        "Frontend Engineer",
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Web Developer",
        "Responsive Web Design",
        "SEO Friendly Website",
        "Accessible Web Apps",
        "Freelance Front-End Developer",
        "Vietnam Front-End Developer"
    ],
    applicationName: "Liam Pham Portfolio",
    authors: [{ name: "Liam Pham", url: "https://liamvietpham.github.io" }],
    creator: "Liam Pham",
    publisher: "Liam Pham",
    alternates: {
        canonical: "/"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1
        }
    },
    twitter: {
        card: "summary_large_image",
        title: "Liam Pham | Front-End Developer, React & Next.js Portfolio",
        description:
            "Explore Liam Pham's portfolio of responsive, accessible, SEO-friendly front-end projects built with React and Next.js.",
        images: ["/og-image.webp"]
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" }
        ],
        shortcut: ["/favicon.ico"],
        apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }]
    },
    openGraph: {
        title: "Liam Pham | Front-End Developer, React & Next.js Portfolio",
        description:
            "Explore Liam Pham's portfolio of responsive, accessible, SEO-friendly front-end projects built with React and Next.js.",
        url: getSiteUrl(),
        siteName: "Liam Pham Portfolio",
        locale: "en_US",
        images: [
            {
                url: "/og-image.webp",
                width: 1200,
                height: 630,
                alt: "Liam Pham Front-End Developer Portfolio"
            }
        ],
        type: "website"
    },
    category: "technology"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
