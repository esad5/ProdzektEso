import Link from "next/link";
import othersImage5 from "@/assets/img/others/5.jpg";
import SkillProgross from "@/components/shared/skills/SkillProgross";

const Skills = ({ isBg, pt }) => {
  return (
    <div
      className={`ltn__progress-bar-area ${
        isBg ? "before-bg-right" : ""
      }  pb-95 ${pt ? pt : "pt-115 "}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <SkillProgross />
          </div>
          <div className="col-lg-6 align-self-center">
            <div
              className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50-- bg-image ml-30"
              data-bs-bg={othersImage5.src}
            >
              <Link
                className="ltn__video-icon-2 "
                href="https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0"
                data-rel="lightcase:myCollection"
              >
                <i className="fa fa-play"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
