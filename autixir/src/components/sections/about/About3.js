import teamImage4 from "@/assets/img/team/4.jpg";
import Image from "next/image";
import Link from "next/link";

const About3 = () => {
  return (
    <div className="ltn__about-us-area pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="about-us-img-wrap about-img-left">
              <Image src={teamImage4} alt="About Us Image" />
              <div className="about-us-img-info about-us-img-info-2">
                <div className="about-us-img-info-inner">
                  <h1>
                    25<span>+</span>
                  </h1>
                  <h6>Godina iskustva</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  {"//"} O nama
                </h6>
                <h1 className="section-title">
                  Sigurnost je naš prioritet <span>.</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed
                do eius mod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad min im veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequ at.{" "}
              </p>
              <div className="btn-wrapper">
                <Link href="/services" className="theme-btn-3 btn btn-effect-4">
                  Naše usluge
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;
