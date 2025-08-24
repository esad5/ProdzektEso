import SkillProgross from "@/components/shared/skills/SkillProgross";
import Image from "next/image";
import skillImage4 from "@/assets/img/team/t-4.png";

const Skills2 = () => {
  return (
    <div className="ltn__progress-bar-area pt-115">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <SkillProgross />
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="about-img-right">
              <Image src={skillImage4} alt="Image" placeholder="blur" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills2;
