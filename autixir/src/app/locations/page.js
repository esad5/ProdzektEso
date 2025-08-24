import LocationsMain from "@/components/layout/main/LocationsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const Locations = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <LocationsMain />
    </PageWrapper>
  );
};

export default Locations;
