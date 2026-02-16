import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { getSiteUrl } from "@/utils/site";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
    metadataBase: new URL(getSiteUrl()),
    title: {
        default: "Liam Pham | Front-End Developer Portfolio",
        template: "%s | Liam Pham"
    },
    description:
        "Liam Pham is a front-end developer specializing in responsive, accessible, and high-performance web interfaces.",
    keywords: [
        "Liam Pham",
        "Front-End Developer",
        "Portfolio",
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Web Developer"
    ],
    authors: [{ name: "Liam Pham", url: "https://liamvietpham.github.io" }],
    creator: "Liam Pham",
    publisher: "Liam Pham",
    alternates: {
        canonical: "/"
    },
    robots: {
        index: true,
        follow: true
    },
    twitter: {
        card: "summary_large_image",
        title: "Liam Pham | Front-End Developer Portfolio",
        description:
            "Explore Liam Pham's portfolio featuring modern, responsive, and accessible front-end projects.",
        images: ["/portfolio_website.webp"]
    },
    openGraph: {
        title: "Liam Pham | Front-End Developer Portfolio",
        description:
            "Explore Liam Pham's portfolio featuring modern, responsive, and accessible front-end projects.",
        url: "/",
        siteName: "Liam Pham Portfolio",
        locale: "en_US",
        images: [
            {
                url: "/portfolio_website.webp",
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
