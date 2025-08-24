import HistoryMain from "@/components/layout/main/HistoryMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const History = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <HistoryMain />
    </PageWrapper>
  );
};

export default History;
