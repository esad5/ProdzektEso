import About3 from "@/components/sections/about/About3";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import CallToAction4 from "@/components/sections/call-to-action/CallToAction4";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import Services4 from "@/components/sections/services/Services4";
import Skills from "@/components/sections/skills/Skills";
import Testimonials3 from "@/components/sections/testimonils/Testimonials3";

const AboutMain = () => {
  return (
    <main>
      <HeroPrimary title="O nama" text="O nama" />
      <About3 />
      <Services4 />
      <CallToAction4 />
      <Skills isBg={true} />
      <Testimonials3 />
      <Blogs2 />
    </main>
  );
};

export default AboutMain;
