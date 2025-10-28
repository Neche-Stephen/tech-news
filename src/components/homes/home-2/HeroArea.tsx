import {
  Clock,
  Shield,
  CheckCircle,
} from "lucide-react";
import styles from "./HomeArea.module.css";

const HeroArea = () => {
  return (
    <>
      <section className="hero-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-8 col-xl-9">
              <div className="hero-content home2">
                <h2
                  className="mb-0 wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="700ms"
                >
                  Healthcare Website Development Agency
                </h2>
              </div>
            </div>

            <div className="col-12 col-md-8 col-lg-4 col-xl-3">
              <div className="hero-content home2">
                <div
                  className="d-flex align-items-center gap-3 wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="900ms"
                >
                  {/* <div className="imgs-group border border-b-2 border-primary"> */}
                  <div className={styles.icons_container}>
                    {/* <img src="/assets/img/bg-img/2.jpg" alt="" />
                    <img src="/assets/img/bg-img/3.jpg" alt="" /> */}
                    {/* <div>
                      <span className="counter">10</span>k
                    </div> */}
                    <div className={`${styles.icon_circle} ${styles.bg_black_gradient}`}>
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className={`${styles.icon_circle} ${styles.bg_gray_gradient}`}>
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className={`${styles.icon_circle} ${styles.bg_gold_modified_gradient}`}>
                      <CheckCircle className="w-6 h-6 text-black" />
                    </div>
                  </div>
                  <h6 className="mb-0">
                    Professional Websites, <br />
                    For Healthcare Providers
                  </h6>
                </div>
                <p
                  className="my-5 wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="1100ms"
                >
                  We specialize in creating professional websites for healthcare 
                  providers. From basic practice websites to advanced appointment 
                  booking systems, we help medical professionals build a 
                  strong online presence.
                </p>
                <a
                  href="/contact"
                  className="btn btn-primary wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="1200ms"
                >
                  <span>CONTACT US</span>
                  <span>CONTACT US</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="divider"></div> */}
        {/* <div className="divider"></div> */}
      </section>
    </>
  );
};

export default HeroArea;
