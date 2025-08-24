/* eslint-disable jsx-a11y/role-supports-aria-props */
"use client";
import CheckoutProduct from "@/components/shared/checkout/CheckoutProduct";
import Nodata from "@/components/shared/no-data/Nodata";
import countTotalPrice from "@/libs/countTotalPrice";
import getAllProducts from "@/libs/getAllProducts";
import modifyAmount from "@/libs/modifyAmount";
import { useCartContext } from "@/providers/CartContext";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import paymnetImage3 from "@/assets/img/icons/payment-3.png";
import useSweetAlert from "@/hooks/useSweetAlert";
import { useEffect, useState } from "react";

const CheckoutPrimary = () => {
  const [isPlaceOrder, setIsPlaceOrder] = useState(false);
  const creteAlert = useSweetAlert();
  const allProducts = getAllProducts();
  const searchParams = useSearchParams();
  const currentId = parseInt(searchParams.get("id"));
  const currentQuantity = parseInt(searchParams.get("quantity"));
  const currentColor = searchParams.get("color");
  const currentSize = searchParams.get("size");
  const { cartProducts: products } = useCartContext();
  const currentProduct = {
    ...allProducts?.find(({ id }) => id === currentId),
    quantity: currentQuantity,
    color: currentColor,
    size: currentSize,
  };

  const isProducts = currentProduct?.title || products?.length ? true : false;
  const subtotal = countTotalPrice(
    currentId ? [{ ...currentProduct, quantity: currentQuantity }] : products
  );
  const shipping = 15;
  const totalPrice = modifyAmount(subtotal + shipping);
  // handle place order
  const handlePlaceOrder = () => {
    creteAlert("error", "Nažalost! Aplikacija je u demo modu.");
    setIsPlaceOrder(false);
  };
  useEffect(() => {
    if (isProducts) {
      setIsPlaceOrder(true);
    }
  }, [isProducts]);
  return (
    <div className="ltn__checkout-area mb-105">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__checkout-inner">
              {/* login */}
              <div className="ltn__checkout-single-content ltn__returning-customer-wrap">
                <h5>
                  Već imate račun?{" "}
                  <a
                    className="ltn__secondary-color"
                    href="#ltn__returning-customer-login"
                    data-bs-toggle="collapse"
                  >
                    Kliknite ovdje za prijavu
                  </a>
                </h5>
                <div
                  id="ltn__returning-customer-login"
                  className="collapse ltn__checkout-single-content-info"
                >
                  <div className="ltn_coupon-code-form ltn__form-box">
                    <p>Molimo prijavite se na svoj račun.</p>
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-item input-item-name ltn__custom-icon">
                            <input
                              type="text"
                              name="ltn__name"
                              placeholder="Unesite ime"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-item input-item-email ltn__custom-icon">
                            <input
                              type="email"
                              name="ltn__email"
                              placeholder="Unesite email adresu"
                            />
                          </div>
                        </div>
                      </div>
                      <button className="btn theme-btn-1 btn-effect-1 text-uppercase">
                        Prijava
                      </button>
                      <label className="input-info-save mb-0">
                        <input type="checkbox" name="agree" /> Zapamti me
                      </label>
                      <p className="mt-30">
                        <a href="register.html">Zaboravili ste lozinku?</a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              {/* coupon */}
              <div className="ltn__checkout-single-content ltn__coupon-code-wrap">
                <h5>
                  Imate kupon?{" "}
                  <a
                    className="ltn__secondary-color"
                    href="#ltn__coupon-code"
                    data-bs-toggle="collapse"
                  >
                    Kliknite ovdje da unesete kod
                  </a>
                </h5>
                <div
                  id="ltn__coupon-code"
                  className="collapse ltn__checkout-single-content-info"
                >
                  <div className="ltn__coupon-code-form">
                    <p>Ako imate kupon kod, unesite ga ispod.</p>
                    <form action="#">
                      <input
                        type="text"
                        name="coupon-code"
                        placeholder="Kupon kod"
                      />
                      <button className="btn theme-btn-2 btn-effect-2 text-uppercase">
                        Primijeni kupon
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* buyer info */}
              <div className="ltn__checkout-single-content mt-50">
                <h4 className="title-2">Detalji naplate</h4>
                <div className="ltn__checkout-single-content-info">
                  <form action="#">
                    <h6>Lični podaci</h6>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-item input-item-name ltn__custom-icon">
                          <input
                            type="text"
                            name="ltn__name"
                            placeholder="Ime"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-name ltn__custom-icon">
                          <input
                            type="text"
                            name="ltn__lastname"
                            placeholder="Prezime"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-email ltn__custom-icon">
                          <input
                            type="email"
                            name="ltn__email"
                            placeholder="Email adresa"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-phone ltn__custom-icon">
                          <input
                            type="text"
                            name="ltn__phone"
                            placeholder="Broj telefona"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-website ltn__custom-icon">
                          <input
                            type="text"
                            name="ltn__company"
                            placeholder="Naziv firme (opcionalno)"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-website ltn__custom-icon">
                          <input
                            type="text"
                            name="ltn__phone"
                            placeholder="Adresa firme (opcionalno)"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <h6>Država</h6>
                        <div className="input-item">
                          <select className="nice-select">
                            <option>Odaberite državu</option>
                            <option>Australija</option>
                            <option>Kanada</option>
                            <option>Kina</option>
                            <option>Maroko</option>
                            <option>Saudijska Arabija</option>
                            <option>Ujedinjeno Kraljevstvo (UK)</option>
                            <option>Sjedinjene Američke Države (US)</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <h6>Adresa</h6>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-item">
                              <input
                                type="text"
                                placeholder="Broj kuće i naziv ulice"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-item">
                              <input
                                type="text"
                                placeholder="Stan, sprat, jedinica itd. (opcionalno)"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <h6>Grad</h6>
                        <div className="input-item">
                          <input type="text" placeholder="Grad" />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <h6>Kanton / Regija</h6>
                        <div className="input-item">
                          <input type="text" placeholder="Kanton / Regija" />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <h6>Poštanski broj</h6>
                        <div className="input-item">
                          <input type="text" placeholder="Poštanski broj" />
                        </div>
                      </div>
                    </div>
                    <p>
                      <label className="input-info-save mb-0">
                        <input type="checkbox" name="agree" /> Kreirati račun?
                      </label>
                    </p>
                    <h6>Napomena uz narudžbu (opcionalno)</h6>
                    <div className="input-item input-item-textarea ltn__custom-icon">
                      <textarea
                        name="ltn__message"
                        placeholder="Napomena o narudžbi, npr. posebne upute za dostavu."
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* payment methods */}
          <div className="col-lg-6">
            <div className="ltn__checkout-payment-method mt-50">
              <h4 className="title-2">Način plaćanja</h4>
              <div id="checkout_accordion_1">
                {/* <!-- card --> */}
                <div className="card">
                  <h5
                    className="collapsed ltn__card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-item-2-1"
                    aria-expanded="false"
                  >
                    Plaćanje čekom
                  </h5>
                  <div
                    id="faq-item-2-1"
                    className="collapse"
                    data-bs-parent="#checkout_accordion_1"
                  >
                    <div className="card-body">
                      <p>
                        Molimo pošaljite ček na: Naziv Prodavnice, Ulica, Grad,
                        Država / Kanton, Poštanski broj.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- card --> */}
                <div className="card">
                  <h5
                    className="ltn__card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-item-2-2"
                    aria-expanded="true"
                  >
                    Plaćanje po pouzeću
                  </h5>
                  <div
                    id="faq-item-2-2"
                    className="collapse show"
                    data-bs-parent="#checkout_accordion_1"
                  >
                    <div className="card-body">
                      <p>Plaćanje gotovinom prilikom dostave.</p>
                    </div>
                  </div>
                </div>
                {/* <!-- card --> */}
                <div className="card">
                  <h5
                    className="collapsed ltn__card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-item-2-3"
                    aria-expanded="false"
                  >
                    PayPal{" "}
                    <Image
                      src={paymnetImage3.src}
                      width={1000}
                      height={1000}
                      style={{ maxWidth: "131px" }}
                      alt="#"
                    />
                  </h5>
                  <div
                    id="faq-item-2-3"
                    className="collapse"
                    data-bs-parent="#checkout_accordion_1"
                  >
                    <div className="card-body">
                      <p>
                        Platite putem PayPal-a; možete platiti karticom čak i ako
                        nemate PayPal račun.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ltn__payment-note mt-30 mb-30">
                <p>
                  Vaši lični podaci će biti korišteni za obradu narudžbe,
                  podršku vašem iskustvu na ovoj web stranici, te za druge
                  svrhe opisane u našoj politici privatnosti.
                </p>
              </div>
              <button
                onClick={handlePlaceOrder}
                className="btn theme-btn-1 btn-effect-1 text-uppercase"
                type="submit"
                disabled={isPlaceOrder ? false : true}
              >
                Potvrdi narudžbu
              </button>
            </div>
          </div>
          {/* product to buy */}
          <div className="col-lg-6">
            {!isProducts ? (
              <Nodata text={"Nema proizvoda!"} />
            ) : (
              <div className="shoping-cart-total mt-50">
                <h4 className="title-2">Ukupno u korpi</h4>
                <table className="table">
                  <tbody>
                    {currentProduct?.title ? (
                      <CheckoutProduct product={currentProduct} />
                    ) : (
                      products?.map((product, idx) => (
                        <CheckoutProduct key={idx} product={product} />
                      ))
                    )}

                    <tr>
                      <td>Dostava i rukovanje</td>
                      <td>{modifyAmount(shipping)} KM</td>
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPrimary;
