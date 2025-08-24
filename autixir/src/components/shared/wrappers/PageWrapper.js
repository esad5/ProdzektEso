"use client";
import { useEffect } from "react";
import Header from "@/components/layout/headers/Header";
import HeaderContex from "@/providers/HeaderContex";
import CartContextProvider from "@/providers/CartContext";
import Footer from "@/components/layout/footers/Footer";
import FooterContexProvider from "@/providers/FooterContext";

import Preloader from "../others/Preloader";
import main from "@/libs/main";
import WishlistContextProvider from "@/providers/WshlistContext";
import ProductContext from "@/providers/ProductContext";

const PageWrapper = ({
  children,
  headerStyle,
  headerSize,
  headerTopStyle,
  isNotHeaderTop,
  headerTopBg,
  navBg,
  isNotHeaderRight,
  isHeaderSupport,
  isNavbarAppointmentBtn,
  footerStyle,
  footerBg,
  isCommingSoon,
}) => {
  useEffect(() => {
    main();
  }, []);
  return (
    <div className="body-wrapper">
      {isCommingSoon ? (
        children
      ) : (
        <CartContextProvider>
          <WishlistContextProvider>
            <HeaderContex
              value={{
                headerStyle,
                headerSize,
                headerTopStyle,
                isNotHeaderTop,
                headerTopBg,
                navBg,
                isNotHeaderRight,
                isHeaderSupport,
                isNavbarAppointmentBtn,
              }}
            >
              <Header />
            </HeaderContex>

            <ProductContext>{children}</ProductContext>
          </WishlistContextProvider>

          <FooterContexProvider value={{ footerStyle, footerBg }}>
            <Footer />
          </FooterContexProvider>
        </CartContextProvider>
      )}

      <Preloader />
    </div>
  );
};

export default PageWrapper;
