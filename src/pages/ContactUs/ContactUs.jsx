import { useEffect } from "react";
import AOS from "aos";
import { MailIcon, Phone } from "lucide-react";

export const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="ContactsContainer" id="contact">
      <h2 className="titleHeader">
        Contact <span className="titleHeaderSub">KIKAPUAPP</span>
      </h2>
      <p className="headerSubtitle">
        Get in touch with us for any queries or support
      </p>

      <div className="contacts-details-container">
        <div className="contact-details">
          <p className="contact-detail">
            <MailIcon className="contact-icon" />
            <a href="mailto: info@kikapuapp.com" className="contact-link">
              info@kikapuapp.com
            </a>
          </p>

          <p className="contact-detail">
            <Phone className="contact-icon" />
            <a href="tel:+254745411549" className="contact-link">
              +254 745 411 549
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
