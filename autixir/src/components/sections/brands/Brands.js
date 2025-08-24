import brandImage1 from "@/assets/img/brand-logo/1.png";
import brandImage2 from "@/assets/img/brand-logo/2.png";
import brandImage3 from "@/assets/img/brand-logo/3.png";
import brandImage4 from "@/assets/img/brand-logo/4.png";
import brandImage5 from "@/assets/img/brand-logo/5.png";
import Image from "next/image";

const Brands = ({ type, bg }) => {
  // Niz sa slikama brendova
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
      className={`ltn__brand-logo-area ltn__brand-logo-1 pb-110 plr--9 ${
        type === 2
          ? bg === "gray"
            ? "section-bg-1 pt-110"
            : "pt-80"
          : "section-bg-1 pt-290"
      }`}
    >
      <div className="container-fluid">
        <div className="row ltn__brand-logo-active">
          {brands?.map((brandImg, idx) => (
            <div key={idx} className="col-lg-12">
              <div className="ltn__brand-logo-item">
                <Image src={brandImg} alt="Logo brenda" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
