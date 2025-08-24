import Image from "next/image";
import Link from "next/link";
import bgImage6 from "@/assets/img/bg/6.jpg";
import bgImage11 from "@/assets/img/bg/11.png";
import bgImage12 from "@/assets/img/bg/12.png";

const CallToAction2 = () => {
  return (
    <div
      className="ltn__call-to-action-area ltn__call-to-action-4 bg-image pt-115 pb-120"
      data-bs-bg={bgImage6.src}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="call-to-action-inner call-to-action-inner-4 text-center">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  {"// "} any question you have {"//"}
                </h6>
                <h1 className="section-title white-color">897-876-987-90</h1>
              </div>
              <div className="btn-wrapper">
                <Link
                  href="tel:+123456789"
                  className="theme-btn-1 btn btn-effect-1"
                >
                  MAKE A CALL
                </Link>{" "}
                <Link
                  href="/contact"
                  className="btn btn-transparent btn-effect-4 white-color"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__call-to-4-img-1">
        <Image src={bgImage12} alt="#" placeholder="blur" />
      </div>
      <div className="ltn__call-to-4-img-2">
        <Image src={bgImage11} alt="#" placeholder="blur" />
      </div>
    </div>
  );
};

export default CallToAction2;
