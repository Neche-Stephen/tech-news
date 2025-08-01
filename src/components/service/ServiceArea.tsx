 
import  { useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  { icon: "web", title: "Website Design & Development", description: "Websites tailored to your business needs, using the top industry technologies." },
  { icon: "ads_click", title: "Search Engine Optimization", description: "Boost your visibility on Google with targeted SEO strategies." },
  { icon: "stream_apps", title: "E-commerce Website Development", description: "Powerful online stores with secure payment gateways" },
  { icon: "design_services", title: "Business Website Development", description: "Professional websites designed to showcase your brand, attract customers." },
  { icon: "ads_click", title: "Website Redesign & Maintenance", description: "Modernize outdated sites with fresh designs, and ongoing maintenance" },
  { icon: "web", title: "Portfolio & Personal Websites", description: "Stand out with a sleek portfolio or personal website that highlights your work" },
  
];

const ServiceArea = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  return (
    <>
         <div className="service-wrapper">
      <div className="divider"></div>

      <div className="container">
         <div className="row g-4 g-lg-5">
          {services.map((item, i) => (
             <div key={i} className="col-12 col-md-6 col-xl-4">
             <Link to="/service-details">
                <div onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={`service-slide-card  ${activeIndex === i ? "active" : ""}`}>
                   <span className="material-symbols-outlined">{item.icon}</span>
                   <h2 style={{ bottom: `${activeIndex === i ? '140px' : ''}` }}>{item.title}</h2>
                    <p className="mb-0" style={{ bottom: `${activeIndex === i ? '45px' : ''}` }}>
                      {item.description}
                    </p>
                </div>
             </Link>
          </div>

          ))} 

         </div>
      </div>

      <div className="divider"></div>
   </div>
    </>
  );
};

export default ServiceArea;