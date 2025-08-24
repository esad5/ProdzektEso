import ServicesMain from "@/components/layout/main/ServicesMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const Services = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <ServicesMain />
    </PageWrapper>
  );
};

export default Services;
