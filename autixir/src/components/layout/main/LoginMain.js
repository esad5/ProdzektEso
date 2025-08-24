import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import LoginPrimary from "@/components/sections/login/LoginPrimary";

const LoginMain = () => {
  return (
    <main>
      <HeroPrimary title={"Prijava"} text="Prijava" />
      <LoginPrimary />
    </main>
  );
};

export default LoginMain;
