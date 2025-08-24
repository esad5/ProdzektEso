"use client";
import FooterTimeSchedule from "./FooterTimeSchedule";
import FooterServices from "./FooterServices";
import FooterNewsFeeds from "./FooterNewsFeeds";
import Copyright from "./Copyright";
import { useFooterContex } from "@/providers/FooterContext";
import footerImage1 from "@/assets/img/bg/footer-bg-1.png";


const Footer = () => {
  const { footerStyle, footerBg } = useFooterContex();
  return (
    <>
      {footerStyle === 2 ? <FooterFeatured /> : ""}
      <footer
        className={`ltn__footer-area ${
          footerStyle === 3 ? "" : "ltn__footer-2"
        }   ${
          footerStyle === 3
            ? ""
            : footerBg === "dark"
            ? "ltn__footer-color-1"
            : "ltn__footer-color-2"
        }`}
      >
        <div
          className={`footer-top-area   ${
            (!footerStyle || footerStyle === 1) && footerBg === "dark"
              ? "section-bg-2"
              : footerStyle === 2 && footerBg === "dark"
              ? "section-bg-2 ooter-top-extra-padding bg-image"
              : footerStyle === 3
              ? footerBg === "dark"
                ? "section-bg-2 plr--5"
                : "section-bg-1 plr--5 "
              : "section-bg-1"
          }`}
          data-bs-bg={
            footerStyle === 2 && footerBg === "dark" ? footerImage1.src : ""
          }
        >
          <div className={footerStyle === 3 ? "container-fluid" : "container"}>
            <div className="row">
              {footerStyle === 3 ? (
                <>
                  <FooterAbout2 />
                  <FooterCompany />
                  <FooterServices2 />
                  <FooterCustomerCare />
                  <FooterNewsletter />
                </>
              ) : (
                <>
                  {footerStyle === 2 && footerBg === "dark" ? (
                    <FooterAbout />
                  ) : (
                    <FooterTimeSchedule />
                  )}

                  <FooterServices />
                  <FooterNewsFeeds />
                </>
              )}
            </div>
          </div>
        </div>
        {footerStyle === 3 ? <Copyright2 /> : <Copyright />}
      </footer>
    </>
  );
};

export default Footer;
