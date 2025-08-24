"use client";
import ButtonOpenMobileMenu from "@/components/shared/buttons/ButtonOpenMobileMenu";
import { useCartContext } from "@/providers/CartContext";
import { useHeaderContex } from "@/providers/HeaderContex";
import Link from "next/link";
import React from "react";

import countTotalPrice from "@/libs/countTotalPrice";
import HeaderCartShow from "./HeaderCartShow";

const HeaderRight = () => {
  const { headerStyle } = useHeaderContex();
  const { cartProducts } = useCartContext();
  const totalProduct = cartProducts?.length;
  const totalPrice = countTotalPrice(cartProducts);
  return (
    <div
      className={`ltn__header-options  ${
        headerStyle === 3 ? "col" : "ltn__header-options-2"
      }`}
    >
      
      {/* <!-- header-search-1 --> */}{" "}
      <div className="header-search-wrap">
        <div className="header-search-1">
          <div className="search-icon">
            <i className="icon-search for-search-show"></i>
            <i className="icon-cancel  for-search-close"></i>
          </div>
        </div>
        <div className="header-search-1-form">
          <form id="#" method="get" action="#">
            <input type="text" name="search" placeholder="Pretraži..." />
            <button type="submit">
              <span>
                <i className="icon-search"></i>
              </span>
            </button>
          </form>
        </div>
      </div>
      {/* <!-- user-menu --> */}
      <div className="ltn__drop-menu user-menu">
        <ul>
          <li>
            <Link href="#">
              <i className="icon-user"></i>
            </Link>
            <ul>
              <li>
                <Link href="/login">Prijavi se</Link>
              </li>
              <li>
                <Link href="/register">Kreiraj račun</Link>
              </li>
              <li>
                <Link href="/account">Moj račun</Link>
              </li>
           
            </ul>
          </li>
        </ul>
      </div>
      {/* <!-- mini-cart --> */}
      {<HeaderCartShow />}
      {/* <!-- mini-cart --> */}
    </div>
  );
};

export default HeaderRight;
