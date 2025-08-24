import CartMain from "@/components/layout/main/CartMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const Cart = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <CartMain />
    </PageWrapper>
  );
};

export default Cart;
