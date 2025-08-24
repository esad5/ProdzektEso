import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import RegisterPrimary from "@/components/sections/register/RegisterPrimary";
import React from "react";

const RegisterMain = () => {
  return (
    <main>
      <HeroPrimary title={"Kreiraj račun"} text="Kreiraj račun" />
      <RegisterPrimary />
    </main>
  );
};

export default RegisterMain;
