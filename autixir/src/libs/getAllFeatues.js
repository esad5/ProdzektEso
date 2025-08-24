import productImage1 from "@/assets/img/product/1.png";

const getAllFeatues = () => {
  const features = [
    {
      id: 1,
      title: "Pristupačna Cijena",
      img: <i className="icon-car-parts"></i>,
      path: "/services",
      desc: "Povoljna cijena za kvalitetne usluge i proizvode.",
      bg: "dark",
      bgImg: null,
    },
    {
      id: 2,
      title: "Iskusni Mehaničari",
      img: <i className="icon-car"></i>,
      path: "/team",
      desc: "Naš tim stručnjaka garantuje pouzdanu uslugu.",
      bg: "secondary",
      bgImg: productImage1,
    },
    {
      id: 3,
      title: "Brza Dostava Usluga",
      img: <i className="icon-mechanic"></i>,
      path: "/services/1",
      desc: "Efikasna i brza realizacija svih servisa vozila.",
      bg: "white",
      bgImg: null,
    },
    {
      id: 4,
      title: "Sve Marke Vozila",
      img: <i className="icon-car-parts"></i>,
      path: "/services",
      desc: "Radimo sa svim vrstama i markama vozila.",
      bg: "white",
      bgImg: null,
    },
    {
      id: 5,
      title: "Iskusni Mehaničari",
      img: <i className="icon-mechanic"></i>,
      path: "/team",
      desc: "Naši stručnjaci su uvijek spremni pomoći.",
      bg: "white",
      bgImg: null,
    },
    {
      id: 6,
      title: "Popravka Vozila",
      img: <i className="icon-repair"></i>,
      path: "/services",
      desc: "Profesionalna popravka svih vrsta kvarova na vozilu.",
      bg: "white",
      bgImg: null,
    },
    {
      id: 7,
      title: "Lakiranje i Dorada",
      img: <i className="icon-car-parts-9"></i>,
      path: "/appointment",
      desc: "Kvalitetno lakiranje i dorada karoserije vozila.",
      bg: "white",
      bgImg: null,
    },
  ];

  return features;
};

export default getAllFeatues;
