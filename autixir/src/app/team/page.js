import TeamMain from "@/components/layout/main/TeamMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const Team = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <TeamMain />
    </PageWrapper>
  );
};

export default Team;
