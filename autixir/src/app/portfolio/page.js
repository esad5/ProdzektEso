import PortfolioMain from "@/components/layout/main/PortfolioMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const Portfolio = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <PortfolioMain />
    </PageWrapper>
  );
};

export default Portfolio;
