import CartPrimary from "@/components/sections/cart/CartPrimary";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import React from "react";

const CartMain = () => {
  return (
    <main>
      <HeroPrimary title="Korpa" text="Korpa" />
      <CartPrimary />
    </main>
  );
};

export default CartMain;
