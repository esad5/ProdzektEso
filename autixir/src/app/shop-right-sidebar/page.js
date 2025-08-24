import ShopMain from "@/components/layout/main/ShopMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const ShopRightSidebar = () => {
  return (
    <PageWrapper
      headerStyle={2}
      headerSize={"lg"}
      footerBg={"dark"}
      isNotHeaderTop={true}
    >
      <ShopMain title={"Shop Right Sidebar"} />
    </PageWrapper>
  );
};

export default ShopRightSidebar;
