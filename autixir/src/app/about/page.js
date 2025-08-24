import AboutMain from "@/components/layout/main/AboutMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const About = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <AboutMain />
    </PageWrapper>
  );
};

export default About;
