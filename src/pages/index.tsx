import AboutSection from "@/components/layout/about-section";
import ContactSection from "@/components/layout/contact-section";
import IntroSection from "@/components/layout/intro-section";
import Navbar from "@/components/layout/navbar";
import useRefSize from "@/hooks/useRefSize";
import { useRef } from "react";

const Homepage = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const { height: navbarHeight } = useRefSize(
    navbarRef as React.RefObject<HTMLElement>
  );

  console.log(navbarHeight);

  return (
    <div>
      <Navbar ref={navbarRef} />
      <IntroSection style={{ height: `calc(100vh - ${navbarHeight}px)` }} />
      <AboutSection style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }} />
      <ContactSection
        style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}
      />
    </div>
  );
};

export default Homepage;
