import AccountMain from "@/components/layout/main/AccountMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const Account = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <AccountMain />
    </PageWrapper>
  );
};

export default Account;
