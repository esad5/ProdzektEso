import brandImage1 from "@/assets/img/brand-logo/b1.png";
import brandImage2 from "@/assets/img/brand-logo/b2.png";
import brandImage3 from "@/assets/img/brand-logo/b3.png";
import brandImage4 from "@/assets/img/brand-logo/b4.png";
import brandImage5 from "@/assets/img/brand-logo/b5.png";
import bgImage7 from "@/assets/img/bg/7.jpg";
import Image from "next/image";
const Brands2 = () => {
  const brands = [
    brandImage1,
    brandImage2,
    brandImage3,
    brandImage4,
    brandImage5,
    brandImage3,
  ];
  return (
    <div
      className="ltn__brand-logo-area ltn__brand-logo-1 bg-image bg-overlay-theme-black-90 pt-290 pb-110 plr--9"
      data-bs-bg={bgImage7?.src}
    >
      <div className="container-fluid">
        <div className="row ltn__brand-logo-active">
          {brands?.map((brandImg, idx) => (
            <div key={idx} className="col-lg-12">
              <div className="ltn__brand-logo-item">
                <Image src={brandImg} alt="Brand Logo" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands2;
