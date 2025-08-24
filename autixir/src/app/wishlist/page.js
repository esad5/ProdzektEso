import WishlistMain from "@/components/layout/main/WishlistMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const Wishlist = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <WishlistMain />
    </PageWrapper>
  );
};

export default Wishlist;
