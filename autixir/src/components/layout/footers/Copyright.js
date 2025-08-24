"use client";
import Image from "next/image";
import Link from "next/link";
import logoImage from "@/assets/img/logo.png";
import logoImage2 from "@/assets/img/logo-2.png";
import { useFooterContex } from "@/providers/FooterContext";

const Copyright = () => {
  const { footerStyle, footerBg } = useFooterContex();
  return (
    <div className="ltn__copyright-area ltn__copyright-2">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="site-logo-wrap">
              <div className="site-logo">
                <Link href="/">
                  <Image
                    src={footerBg === "dark" ? logoImage2 : logoImage}
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="get-support ltn__copyright-design clearfix">
                <div className="get-support-info">
                  <h6>Dizajn:</h6>
                  <h4>
                    Esad Bobić - <span className="current-year"></span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 align-self-center">
            <div className="ltn__copyright-menu text-end">
              <ul>
                <li>
                  <a href="#">Uslovi korištenja</a>
                </li>{" "}
                <li>
                  <a href="#">Prava</a>
                </li>{" "}
                <li>
                  <a href="#">Privatnost</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
