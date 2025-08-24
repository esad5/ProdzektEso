import Link from "next/link";
import React from "react";

const About1 = () => {
  return (
    <div className="ltn__about-us-area pt-115 pb-95">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  {"// O Nama"}
                </h6>
                <h1 className="section-title">
                  Sigurnost Nam Je Na Prvom Mjestu<span>.</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
              <div className="about-us-info-wrap-inner about-us-info-devide">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="list-item-with-icon">
                  <ul>
                    <li>
                      <Link href="/contact">24/7 Online Podrška</Link>
                    </li>
                    <li>
                      <Link href="/team">Stručni Tim</Link>
                    </li>
                    <li>
                      <Link href="/services/1">Kvalitetna Oprema</Link>
                    </li>
                    <li>
                      <Link href="/shop">Neograničeni Proizvodi</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 align-self-center">
            <div className="get-a-quote-wrap">
              <h2>Zatraži Ponudu</h2>
              <form action="#" className="get-a-quote-form">
                <div className="input-item input-item-name ltn__custom-icon">
                  <input type="text" placeholder="Unesite vaše ime" />
                </div>
                <div className="input-item input-item-email ltn__custom-icon">
                  <input type="email" placeholder="Unesite vaš email" />
                </div>
                <div className="input-item">
                  <select className="nice-select">
                    <option>Izaberite tip vozila</option>
                    <option>Novi Auto</option>
                    <option>Polovni Auto</option>
                  </select>
                </div>
                <div className="btn-wrapper mt-0">
                  <button
                    type="submit"
                    className="btn theme-btn-1 btn-effect-1 text-uppercase"
                  >
                    zakaži termin
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
