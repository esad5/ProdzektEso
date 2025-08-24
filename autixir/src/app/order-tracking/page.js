import OrderTrackingMain from "@/components/layout/main/OrderTrackingMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const OrderTracking = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <OrderTrackingMain />
    </PageWrapper>
  );
};

export default OrderTracking;
