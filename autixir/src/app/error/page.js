import React from "react";

import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import NotFoundMain from "@/components/layout/main/NotFoundMain";

const Error = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <NotFoundMain />
    </PageWrapper>
  );
};

export default Error;
