import RegisterMain from "@/components/layout/main/RegisterMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const Register = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <RegisterMain />
    </PageWrapper>
  );
};

export default Register;
