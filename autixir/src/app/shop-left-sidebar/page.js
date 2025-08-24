import ShopMain from "@/components/layout/main/ShopMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const ShopLeftSidebar = () => {
  return (
    <PageWrapper
      headerStyle={2}
      headerSize={"lg"}
      footerBg={"dark"}
      isNotHeaderTop={true}
    >
      <ShopMain isSidebar="left" title={"Shop Left Sidebar"} />
    </PageWrapper>
  );
};

export default ShopLeftSidebar;
