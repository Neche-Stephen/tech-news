import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const PLAN_OPTIONS = [
  { label: 'Basic (₦200k)', value: 'Basic' },
  { label: 'Standard (₦300k)', value: 'Standard' },
  { label: 'Custom', value: 'Custom' },
];

const PriceArea = ({style_2}: any) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [messageOpen, setMessageOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    purpose: '',
    company: '',
    audience: '',
  });

  const openInquiryModal = (plan: string) => {
    setSelectedPlan(plan);
    setFormData(f => ({ ...f, plan }));
    setModalOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendInquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm('service_xllt7pk', 'template_4q9k235', e.currentTarget, { publicKey: 'sy-S5IS93A_nOyaVr' })
      .then(
        () => {
          setModalMessage('Your inquiry was sent successfully!');
          setMessageOpen(true);
          setLoading(false);
          setModalOpen(false);
          setFormData({ name: '', email: '', phone: '', plan: '', purpose: '', company: '', audience: '' });
        },
        () => {
          setModalMessage('Failed to send inquiry. Please try again.');
          setMessageOpen(true);
          setLoading(false);
        }
      );
  };

  return (
    <>
      <div className={` price-table-wrapper ${style_2 ? "" : "bg-secondary"}`}>
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div className="section-heading text-center">
                <h2 className="mb-0">Service Packages</h2>
                <p className="mt-3 mb-0" style={{color: '#888', fontSize: '0.95rem'}}>
                  *Prices may vary depending on specific requirements and final project scope
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-sm"></div>

        <div className="container">
          <div className="row g-4 justify-content-center align-items-stretch">


            <div className="col-12 col-md-6 col-lg-4">
              <div className="price-card h-100">
                <div className="price-info">
                  <h6>Basic</h6>
                  <h3 className="price">₦200k</h3>
                  <p className="mb-0">Small businesses, or professionals looking to establish a basic online presence.</p>
                </div>

                <ul className="price-description list-unstyled">
                  <li><span className="material-symbols-outlined">check</span> Professionally designed landing page</li>
                  <li><span className="material-symbols-outlined">check</span> Integrated contact form so clients or prospects can easily reach you</li>
                  <li><span className="material-symbols-outlined">check</span> 1 year of secure web hosting</li>
                  <li><span className="material-symbols-outlined">check</span> Domain name registration and setup</li>
                  <li><span className="material-symbols-outlined">check</span> Social media profile integration</li>
                  <li><span className="material-symbols-outlined">check</span> Basic SEO optimization for better search visibility</li>
                  <li><span className="material-symbols-outlined">check</span> SSL Certificate for security and trust</li>
                  <li><span className="material-symbols-outlined">check</span> WhatsApp chat integration for real-time customer communication
</li>
                  
                </ul>

                <div className="choose-plan">
                  <a href="#" className="btn btn-dark w-100" onClick={e => { e.preventDefault(); openInquiryModal('Basic'); }}><span>Choose this plan</span><span>Choose this plan</span></a>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-4">
              <div className="price-card h-100">
                <div className="price-info">
                  <h6>Standard</h6>
                  <h3 className="price">₦300k</h3>
                  <p className="mb-0">Ideal for medium size or growing businesses wanting a complete, informative website</p>
                </div>

                <ul className="price-description list-unstyled">
                  <li><span className="material-symbols-outlined">check</span> Everything in the Basic Package</li>
                  <li><span className="material-symbols-outlined">check</span> Up to 5 fully developed pages (Home, About Us, Services, Contact, Blog)</li>
                  <li><span className="material-symbols-outlined">check</span> Team or staff profile sections</li>
                  <li><span className="material-symbols-outlined">check</span> Blog feature for publishing updates, news, or articles</li>
                  <li><span className="material-symbols-outlined">check</span> Google Maps integration for location visibility</li>
                </ul>

                <div className="choose-plan">
                  <a href="#" className="btn btn-primary w-100" onClick={e => { e.preventDefault(); openInquiryModal('Standard'); }}><span>Choose this plan</span><span>Choose this plan</span></a>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-4">
              <div className="price-card h-100">
                <div className="price-info">
                  <h6>Custom</h6>
                  <p className="mb-0">
                    Perfect for businesses or individuals with unique requirements. Get a tailored solution designed specifically for your needs.
                  </p>
                </div>

                <ul className="price-description list-unstyled">
                  <li><span className="material-symbols-outlined">check</span> Bespoke website or web app development</li>
                  <li><span className="material-symbols-outlined">check</span> Advanced integrations (APIs, payment, etc.)</li>
                  <li><span className="material-symbols-outlined">check</span> Custom design and branding</li>
                  <li><span className="material-symbols-outlined">check</span> Ongoing support and maintenance</li>
                  <li><span className="material-symbols-outlined">check</span> Any feature you need—just ask!</li>
                </ul>

                <div className="choose-plan">
                  <a href="#" className="btn btn-dark w-100" onClick={e => { e.preventDefault(); openInquiryModal('Custom'); }}><span>Contact Us for a Custom Quote</span><span>Contact Us for a Custom Quote</span></a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="divider"></div>
      </div>
      {modalOpen && (
        <div
          style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999}} 
          onClick={() => setModalOpen(false)}
        >
          <div
            style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '8px',
              minWidth: '600px',
              maxWidth: '95vw',
              textAlign: 'center',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              aria-label="Close"
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'transparent',
                border: 'none',
                fontSize: '2rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                zIndex: 2,
              }}
            >
              &times;
            </button>
            <h4>Quick Inquiry</h4>
            <form onSubmit={sendInquiry} style={{textAlign: 'left'}}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                maxWidth: '100%',
              }}>
                <div className="mb-3" style={{width: '100%'}}>
                  <label>Name</label>
                  <input name="name" type="text" className="form-control" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3" style={{width: '100%'}}>
                  <label>Email</label>
                  <input name="email" type="email" className="form-control" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3" style={{width: '100%'}}>
                  <label>Phone</label>
                  <input name="phone" type="text" className="form-control" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="mb-3" style={{width: '100%'}}>
                  <label>Plan</label>
                  <select name="plan" className="form-control" value={formData.plan} onChange={handleChange} required>
                    {PLAN_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                  </select>
                </div>
              </div>
              <div className="mb-3" style={{width: '100%'}}>
                <label>What do you need a website for?</label>
                <textarea name="purpose" className="form-control" rows={2} value={formData.purpose} onChange={handleChange} placeholder="e.g. promote your business, sell products, showcase your work, take bookings, etc." required></textarea>
              </div>
              <div className="mb-3" style={{width: '100%'}}>
                <label>What does your company do? <span style={{color:'#888'}}>(optional)</span></label>
                <textarea name="company" className="form-control" rows={2} value={formData.company} onChange={handleChange} placeholder="Briefly describe your company or organization" />
              </div>
              <div className="mb-3" style={{width: '100%'}}>
                <label>Who is your target audience? <span style={{color:'#888'}}>(optional)</span></label>
                <textarea name="audience" className="form-control" rows={2} value={formData.audience} onChange={handleChange} placeholder="e.g. young professionals, local businesses, parents, etc." />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Inquiry'}
                </button>
                <button type="button" className="btn btn-secondary ms-2" onClick={() => setModalOpen(false)} disabled={loading}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {messageOpen && (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999}}>
          <div style={{background: 'white', padding: '2rem', borderRadius: '8px', minWidth: '300px', textAlign: 'center'}}>
            <p>{modalMessage}</p>
            <button className="btn btn-primary" onClick={() => setMessageOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default PriceArea;