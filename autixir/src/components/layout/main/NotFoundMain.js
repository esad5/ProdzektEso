import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import NotFoundPrimary from "@/components/sections/not-found/NotFoundPrimary";

const NotFoundMain = () => {
  return (
    <main>
      <HeroPrimary title={"404 Page"} text="404" />
      <NotFoundPrimary />
    </main>
  );
};

export default NotFoundMain;
