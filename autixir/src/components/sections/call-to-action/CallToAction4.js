import bgImage13 from "@/assets/img/bg/13.jpg";
import Link from "next/link";

const CallToAction4 = () => {
  return (
    <div
      className="call-to-action-area call-to-action-5 bg-image bg-overlay-theme-90 pt-40 pb-25"
      data-bs-bg={bgImage13.src}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="call-to-action-inner call-to-action-inner-5 text-center">
              <h2 className="white-color text-decoration">
                24/7 Dostupni, Zakaži{" "}
                <Link href="/">Servis</Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction4;
