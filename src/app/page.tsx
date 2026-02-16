import AboutMe from "@/components/AboutMe";
import ContactMe from "@/sections/ContactMe";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import MyProjects from "@/sections/MyProjects";
import Navbar from "@/sections/Navbar";
import TechnicalProficiency from "@/sections/TechnicalProficiency";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TechnicalProficiency />
      <AboutMe />
      <MyProjects />
      <ContactMe />
      <Footer />
    </div>
  );
}
