import ShopMain from "@/components/layout/main/ShopMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React, { Suspense } from "react";

const Shop = () => {
  return (
    <PageWrapper
      headerStyle={2}
      headerSize={"lg"}
      footerBg={"dark"}
      isNotHeaderTop={true}
    >
      <ShopMain isSidebar="primary" />
    </PageWrapper>
  );
};

export default Shop;
