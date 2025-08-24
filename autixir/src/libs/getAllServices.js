import allServices from "@/../public/fakedata/services.json";
import serviceImage1 from "@/assets/img/service/1.jpg";
import serviceImage2 from "@/assets/img/service/2.jpg";
import serviceImage3 from "@/assets/img/service/3.jpg";
import serviceImageLarge1 from "@/assets/img/service/19.jpg";
import serviceImageLarge2 from "@/assets/img/service/21.jpg";
import serviceImageLarge3 from "@/assets/img/service/22.jpg";
import serviceImageLarge4 from "@/assets/img/service/23.jpg";
const getAllServices = () => {
  const images = [
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage2,
    serviceImage3,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
    serviceImage1,
  ];
  const imagesLarge = [
    serviceImageLarge2,
    serviceImageLarge1,
    serviceImageLarge3,
    serviceImageLarge4,
    serviceImageLarge1,
    serviceImageLarge2,
    serviceImageLarge3,
    serviceImageLarge4,
    serviceImageLarge1,
    serviceImageLarge2,
    serviceImageLarge3,
    serviceImageLarge4,
    serviceImageLarge1,
    serviceImageLarge2,
    serviceImageLarge3,
    serviceImageLarge4,
    serviceImageLarge1,
    serviceImageLarge2,
    serviceImageLarge3,
    serviceImageLarge4,
    serviceImageLarge1,
    serviceImageLarge2,
    serviceImageLarge3,
    serviceImageLarge4,
    serviceImageLarge1,
    serviceImageLarge2,
    serviceImageLarge3,
    serviceImageLarge4,
    serviceImageLarge1,
    serviceImageLarge2,
    serviceImageLarge3,
    serviceImageLarge4,
    serviceImageLarge1,
  ];
  const altImages = {
    0: <i className="icon-car-service"></i>,
    1: <i className="icon-mechanic"></i>,
    2: <i className="icon-cog"></i>,
    3: <i className="icon-car-parts"></i>,
    4: <i className="icon-repair"></i>,
    5: <i className="icon-automobile"></i>,
    6: <i className="icon-mechanic"></i>,
    7: <i className="icon-mechanic"></i>,
    8: <i className="icon-mechanic"></i>,
    9: <i className="icon-mechanic"></i>,
    10: <i className="icon-mechanic"></i>,
    11: <i className="icon-mechanic"></i>,
    12: <i className="icon-mechanic"></i>,
    13: <i className="icon-mechanic"></i>,
    14: <i className="icon-mechanic"></i>,
    15: <i className="icon-mechanic"></i>,
    16: <i className="icon-mechanic"></i>,
    17: <i className="icon-car-parts-3"></i>,
    18: <i className="icon-repair"></i>,
    19: <i className="icon-mechanic"></i>,
    20: <i className="icon-car-parts"></i>,
    21: <i className="icon-exterior"></i>,
    22: <i className="icon-car-parts-6"></i>,
    23: <i className="icon-car-parts-7"></i>,
    24: <i className="icon-car-parts-8"></i>,
    25: <i className="icon-car-parts-3"></i>,
    26: <i className="icon-car-parts-3"></i>,
    27: <i className="icon-mechanic"></i>,
    28: <i className="icon-repair"></i>,
  };

  const services = [...allServices]?.map((service, idx) => ({
    ...service,

    image: images[idx],
    imgAlt: altImages[idx],
    imageLarge: imagesLarge[idx],
  }));
  return services;
};

export default getAllServices;
