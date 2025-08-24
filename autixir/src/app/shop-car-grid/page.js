import ShopMain from "@/components/layout/main/ShopMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

const ShopCarGrid = () => {
  return (
    <PageWrapper
      headerStyle={2}
      headerSize={"lg"}
      footerBg={"dark"}
      isNotHeaderTop={true}
    >
      <ShopMain isSidebar={false} title={"Shop Car Grid"} isCar={true} />
    </PageWrapper>
  );
};

export default ShopCarGrid;
