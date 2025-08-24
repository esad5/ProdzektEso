import ShopMain from "@/components/layout/main/ShopMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

const ShopCarLeftSidebar = () => {
  return (
    <PageWrapper
      headerStyle={2}
      headerSize={"lg"}
      footerBg={"dark"}
      isNotHeaderTop={true}
    >
      <ShopMain
        isSidebar={"left"}
        title={"Shop Car Left Sidebar"}
        text={"Shop Car Left Sidebar"}
        isCar={true}
      />
    </PageWrapper>
  );
};

export default ShopCarLeftSidebar;
