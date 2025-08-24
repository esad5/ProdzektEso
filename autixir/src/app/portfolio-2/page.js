import PortfolioMain from "@/components/layout/main/PortfolioMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const Portfolio2 = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <PortfolioMain type={2} />
    </PageWrapper>
  );
};

export default Portfolio2;
