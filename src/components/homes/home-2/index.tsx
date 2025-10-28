  
import HeroArea from "./HeroArea";
import MissionArea from "./MissionArea";
import ServiceArea from "./ServiceArea";
import ProjectArea from "./ProjectArea";
import CategoryArea from "./CategoryArea";
import PriceArea from "./PriceArea"; 
import HeaderOne from "../../../layouts/headers/HeaderOne";
import FooterOne from "../../../layouts/footers/FooterOne";
import BackToTop from "../../../common/BackToTop";

const HomeTwo = () => {
	return (
		<>
			<HeaderOne style_2={true} />
      <HeroArea />
      {/* <VideoArea /> */}
      <MissionArea />
      <ServiceArea />
      <ProjectArea />
      <CategoryArea />
      {/* <ProcessArea /> */}
      {/* <TeamArea /> */}
      <PriceArea />
      {/* <FaqArea /> */}
      {/* <TestimonialArea /> */}
      {/* <BlogArea /> */}
      <FooterOne style_2={true} />
      <BackToTop />
		</>
	);
};

export default HomeTwo;
