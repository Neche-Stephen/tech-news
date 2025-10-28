 
import  { useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  { icon: "web", title: "Healthcare Website Development", description: "Professional websites tailored to medical practices, clinics and healthcare organizations." },
  { icon: "ads_click", title: "Healthcare SEO Services", description: "Boost your practice visibility on Google with targeted healthcare SEO strategies." },
  { icon: "calendar_month", title: "Appointment Booking Systems", description: "Advanced online scheduling systems that let patients book appointments 24/7." },
  { icon: "local_hospital", title: "Medical Practice Websites", description: "Professional websites designed to showcase your medical services and build trust." },
  { icon: "build", title: "Medical Website Redesign & Maintenance", description: "Modernize outdated medical sites with fresh designs, and ongoing maintenance" },
  { icon: "health_and_safety", title: "Clinic & Hospital Websites", description: "Comprehensive websites for healthcare facilities of all sizes and specialties" },
  
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
             <Link to="#">
                <div onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={`service-slide-card  ${activeIndex === i ? "active" : ""}`}>
                   <span className="material-symbols-outlined">{item.icon}</span>
                   <h2 style={{ bottom: `${activeIndex === i ? '155px' : ''}` }}>{item.title}</h2>
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