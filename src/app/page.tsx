import AboutMe from "@/components/AboutMe";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import { ABOUT_ME } from "@/utils/data";
import { getSiteUrl } from "@/utils/site";
import dynamic from "next/dynamic";

const TechnicalProficiency = dynamic(
  () => import("@/sections/TechnicalProficiency")
);
const MyProjects = dynamic(() => import("@/sections/MyProjects"));
const ContactMe = dynamic(() => import("@/sections/ContactMe"));

export default function Home() {
  const siteUrl = getSiteUrl();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Liam Pham",
        url: siteUrl,
        email: ABOUT_ME.email,
        sameAs: ABOUT_ME.socialLinks.map((item) => item.link),
        jobTitle: "Front-End Developer",
        description:
          "Front-end developer focused on React, Next.js, TypeScript, SEO-friendly websites, and responsive web applications.",
        knowsAbout: [
          "Front-End Development",
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Responsive Web Design",
          "SEO",
          "Accessibility",
          "Web Performance"
        ]
      },
      {
        "@type": "WebSite",
        name: "Liam Pham Portfolio",
        url: siteUrl,
        description:
          "Portfolio of Liam Pham, a front-end developer building responsive, accessible, SEO-friendly web applications with React and Next.js.",
        inLanguage: "en-US"
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <Hero />
      <TechnicalProficiency />
      <AboutMe />
      <MyProjects />
      <ContactMe />
      <Footer />
    </main>
  );
}
