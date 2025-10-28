import { useEffect } from "react";

const MissionArea = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <>
      <div className="mission-vision-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-6">
              <div className="mission-vision-img-container">
                {/* <img src="/assets/img/bg-img/6.jpg" alt="" /> */}
                <img src="/assets/img/bg-img/mission.jpg" alt="" />

                <div className="experience">
                  <h3 className="mb-0">Top</h3>
                  <span>Industry Skills</span>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="mission-vision-content">
                <h2>Healthcare Websites That Work for You</h2>
                <p className="mb-4">
                  We are a specialized web development company focused on empowering
                  healthcare organizations through professional website design and development.
                  We blend medical industry knowledge, technology, and design to craft
                  high-performing websites that build patient trust and drive
                  healthcare growth.
                </p>

                <div className="mission-vision-accordion">
                  <div className="accordion" id="missionVision">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Our Mission
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#missionVision"
                      >
                        <div className="accordion-body">
                        Our mission is to help healthcare providers and organizations build professional, user-friendly websites that showcase their expertise, simplify patient interactions, and strengthen their online reputation.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Our Vision
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#missionVision"
                      >
                        <div className="accordion-body">
                        To empower medical and healthcare professionals with a strong digital presence that enhances trust, accessibility, and patient engagement worldwide.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default MissionArea;
