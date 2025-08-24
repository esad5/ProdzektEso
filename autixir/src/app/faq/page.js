import FaqMain from "@/components/layout/main/FaqMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const Faq = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <FaqMain />
    </PageWrapper>
  );
};

export default Faq;
