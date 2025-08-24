import allHistory from "@/../public/fakedata/history.json";
import historyImage1 from "@/assets/img/service/history-1.jpg";
import historyImage2 from "@/assets/img/img-slide/12.jpg";
import historyImage3 from "@/assets/img/img-slide/11.jpg";
import historyImage4 from "@/assets/img/img-slide/13.jpg";
import historyImage5 from "@/assets/img/img-slide/12.jpg";
import historyImage6 from "@/assets/img/img-slide/11.jpg";
import historyBadgeImage1 from "@/assets/img/img-slide/11.jpg";
const getHistory = () => {
  const images = [
    historyImage1,
    historyImage1,
    historyImage1,
    historyImage1,
    historyImage1,
    historyImage2,
    historyImage3,
    historyImage4,
    historyImage5,
    historyImage6,
  ];
  const badgeImages = {
    0: <i className="fas fa-award"></i>,
    1: <i className="fas fa-award"></i>,
    2: <i className="fas fa-award"></i>,
    3: <i className="fas fa-award"></i>,
    4: <i className="fas fa-award"></i>,
    5: <i className="fas fa-award"></i>,
    6: <i className="icon-award"></i>,
    7: <i className="fas fa-medal"></i>,
    8: <i className="icon-award"></i>,
    9: <i className="fas fa-trophy"></i>,
  };
  const history = [...allHistory]?.map((hisorySingle, idx) => ({
    ...hisorySingle,

    image: images[idx],
    badgeImage: badgeImages[idx],
  }));

  return history;
};

export default getHistory;
