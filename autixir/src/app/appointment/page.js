import AppointmentMain from "@/components/layout/main/AppointmentMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const Appointment = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <AppointmentMain />
    </PageWrapper>
  );
};

export default Appointment;
