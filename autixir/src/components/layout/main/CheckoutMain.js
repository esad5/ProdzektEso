import CheckoutPrimary from "@/components/sections/checkout/CheckoutPrimary";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";

const CheckoutMain = () => {
  return (
    <main>
      <HeroPrimary title="Plaćanje" text="Plaćanje" />
      <CheckoutPrimary />
    </main>
  );
};

export default CheckoutMain;
