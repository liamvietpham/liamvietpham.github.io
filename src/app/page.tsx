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
        jobTitle: "Front-End Developer"
      },
      {
        "@type": "WebSite",
        name: "Liam Pham Portfolio",
        url: siteUrl,
        description:
          "Portfolio of Liam Pham, front-end developer building responsive and accessible web applications."
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
