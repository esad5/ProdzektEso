import ShopMain from "@/components/layout/main/ShopMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

const ShopCarRightSidebar = () => {
  return (
    <PageWrapper
      headerStyle={2}
      headerSize={"lg"}
      footerBg={"dark"}
      isNotHeaderTop={true}
    >
      <ShopMain
        title={"Shop Car Right Sidebar"}
        text={"Shop Car Right Sidebar"}
        isCar={true}
      />
    </PageWrapper>
  );
};

export default ShopCarRightSidebar;
