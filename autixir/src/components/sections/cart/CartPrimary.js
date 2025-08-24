/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import CartProduct from "@/components/shared/cart/CartProduct";
import Nodata from "@/components/shared/no-data/Nodata";
import useSweetAlert from "@/hooks/useSweetAlert";
import addItemsToLocalstorage from "@/libs/addItemsToLocalstorage";
import countTotalPrice from "@/libs/countTotalPrice";
import modifyAmount from "@/libs/modifyAmount";
import { useCartContext } from "@/providers/CartContext";
import Link from "next/link";
import { useEffect, useState } from "react";

const CartPrimary = () => {
  const { cartProducts: currentProducts, setCartProducts } = useCartContext();
  const creteAlert = useSweetAlert();
  const cartProducts = currentProducts;
  // stats
  const [updateProducts, setUpdateProducts] = useState(cartProducts);

  const [isUpdate, setIsUpdate] = useState(false);
  const [isClient, setIsisClient] = useState(false);
  const subTotalPrice = countTotalPrice(cartProducts);
  const vat = subTotalPrice ? 15 : 0;
  const totalPrice = modifyAmount(subTotalPrice + vat);
  const isCartProduct = cartProducts?.length || false;

  // update cart
  const handleUpdateCart = () => {
    addItemsToLocalstorage("cart", [...updateProducts]);
    setCartProducts([...updateProducts]);
    creteAlert("success", "Uspjeh! Korpa je ažurirana.");
    setIsUpdate(false);
  };
  useEffect(() => {
    setUpdateProducts([...cartProducts]);
    setIsisClient(true);
  }, [cartProducts]);
  return (
    <div className="liton__shoping-cart-area mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="shoping-cart-inner">
              <div className="shoping-cart-table table-responsive">
                {isClient ? (
                  <table className="table">
                    <tbody>
                      {!isCartProduct ? (
                        <tr>
                          <td>
                            <Nodata text={"Korpa je prazna!"} />
                          </td>
                        </tr>
                      ) : (
                        cartProducts?.map((product, idx) => (
                          <CartProduct
                            key={idx}
                            product={product}
                            updateProducts={updateProducts}
                            setUpdateProducts={setUpdateProducts}
                            setIsUpdate={setIsUpdate}
                          />
                        ))
                      )}

                      <tr className="cart-coupon-row">
                        <td colSpan="6">
                          <div className="cart-coupon">
                            <input
                              type="text"
                              name="cart-coupon"
                              placeholder="Kupon kod"
                            />{" "}
                            <button
                              type="submit"
                              className="btn theme-btn-2 btn-effect-2"
                            >
                              Primijeni kupon
                            </button>
                          </div>
                        </td>
                        <td>
                          <button
                            onClick={handleUpdateCart}
                            type="submit"
                            className={`btn theme-btn-2  ${
                              isUpdate ? "" : "disabled"
                            }`}
                            disabled={isUpdate ? false : true}
                          >
                            Ažuriraj korpu
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  ""
                )}
              </div>
              <div className="shoping-cart-total mt-50">
                <h4>Ukupno u korpi</h4>
                {isClient ? (
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Međuzbir korpe</td>
                        <td>{modifyAmount(subTotalPrice)} KM</td>
                      </tr>
                      <tr>
                        <td>Dostava i rukovanje</td>
                        <td>{modifyAmount(vat)} KM</td>
                      </tr>
                      <tr>
                        <td>PDV</td>
                        <td>0.00 KM</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Ukupno za plaćanje</strong>
                        </td>
                        <td>
                          <strong>{totalPrice} KM</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  ""
                )}
                <div className="btn-wrapper text-right">
                  <Link
                    href="/checkout"
                    className="theme-btn-1 btn btn-effect-1"
                    disabled={isUpdate ? false : true}
                  >
                    Nastavi na plaćanje
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPrimary;
