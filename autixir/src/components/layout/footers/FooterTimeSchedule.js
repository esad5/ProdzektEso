"use client";
import bgImage4 from "@/assets/img/bg/4.jpg";
import { useFooterContex } from "@/providers/FooterContext";
const FooterTimeSchedule = () => {
  const { footerStyle, footerBg } = useFooterContex();
  return (
    <div className="col-xl-4 col-md-5">
      <div
        className={`footer-widget ltn__footer-timeline-widget ltn__footer-timeline-widget-1 ${
          (!footerStyle || footerStyle === 1) && footerBg === "dark"
            ? "bg-image bg-overlay-theme-black-90"
            : ""
        }`}
        data-bs-bg={
          (!footerStyle || footerStyle === 1) && footerBg === "dark"
            ? bgImage4.src
            : ""
        }
      >
        <h6 className="ltn__secondary-color text-uppercase">
          {"// time shedule"}
        </h6>
        <h4 className="footer-title">Radno vrijeme.</h4>
        <ul>
          <li>
  Ponedjeljak <span>07:00 - 20:00</span>
</li>
<li>
  Utorak <span>07:00 - 20:00</span>
</li>
<li>
  Srijeda <span>07:00 - 20:00</span>
</li>
<li>
  Četvrtak <span>07:00 - 20:00</span>
</li>
<li>
  Petak <span>07:00 - 20:00</span>
</li>
<li>
  Subota <span>07:00 - 20:00</span>
</li>
<li>
  Nedjelja <span>Slobodna</span>
</li>

        </ul>
      </div>
    </div>
  );
};

export default FooterTimeSchedule;
