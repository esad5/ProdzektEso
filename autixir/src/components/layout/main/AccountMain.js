import AccountPrimary from "@/components/sections/account/AccountPrimary";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import React from "react";

const AccountMain = () => {
  return (
    <main>
      <HeroPrimary title={"Moj račun"} text="Moj račun" />
      <AccountPrimary />
    </main>
  );
};

export default AccountMain;
