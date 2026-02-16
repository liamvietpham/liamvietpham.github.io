import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
    ),
    title: "Liam Pham | Front-End Developer Portfolio",
    description:
        "Liam Pham is a front-end developer specializing in responsive, accessible web interfaces.",
    openGraph: {
        title: "Liam Pham | Front-End Developer Portfolio",
        description:
            "Explore the portfolio of Liam Pham, a front-end developer creating clean, responsive UI experiences.",
        url: "/",
        siteName: "Liam Pham Portfolio",
        images: [
            {
                url: "/portfolio_website.webp",
                width: 1200,
                height: 630,
                alt: "Liam Pham Front-End Developer Portfolio"
            }
        ],
        type: "website"
    }
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
