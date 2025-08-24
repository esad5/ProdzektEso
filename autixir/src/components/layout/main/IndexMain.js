import About1 from "@/components/sections/about/About1";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import Brands from "@/components/sections/brands/Brands";
import CallToaction from "@/components/sections/call-to-action/CallToaction";
import CounterUp from "@/components/sections/counters/CounterUp";
import Features from "@/components/sections/features/Features";
import Hero1 from "@/components/sections/hero-banners/Hero1";
import Services1 from "@/components/sections/services/Services1";
import Team1 from "@/components/sections/team/Team1";

const IndexMain = () => {
  return (
    <main>
      <Hero1 />
      <Features />
      <About1 />
      <Services1 />
      <CounterUp />
      <Team1 />
      <CallToaction />
      <Brands />
      <Blogs2 />
    </main>
  );
};

export default IndexMain;
