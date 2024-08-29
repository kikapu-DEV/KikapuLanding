import { images } from "../../constants";
import { useEffect } from "react";
import AOS from "aos";

export const WhyUs = () => {
  useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);
  
  const reasons = [
    {
      id: "1",
      image: images.inventory,
      title: "Inventory Management",
      description:
        "Say goodbye to manual tracking and wasted food. KikapuApp gives you real-time data to optimize ordering and minimize waste.",
    },
    {
      id: "2",
      image: images.POS,
      title: "Seamless Point-of-Sale",
      description:
        "Process transactions, manage orders, and accept all payments; all in one user-friendly system and application.",
    },
    {
      id: "3",
      image: images.analytics,
      title: "Business Analytics",
      description:
        "Make data-driven decisions with comprehensive reports that unlock valuable customer and business performance insights.",
    },
    {
      id: "4",
      image: images.credit,
      title: "Financial Potential",
      description:
        "Our unique credit score solutions can open doors to financing opportunities, empowering your restaurant's growth.",
    },
    {
      id: "5",
      image: images.orderReservation,
      title: "Orders & Reservations",
      description:
        "KikapuApp offers online ordering and reservation booking, increasing customer satisfaction and loyalty.",
    },
    {
      id: "6",
      image: images.paymentOptions,
      title: "Diverse Payment Options",
      description:
        "Give your customers the flexibility to pay the way they want with our integrated payment processing system.",
    },
  ];

  return (
    <div className="whyContainer" id="about">
      <div className='whyUsHeading'>
				<span style={{ color: "#D9EEE8" }}>Why</span> KikapuApp?
			</div>

      <div className="reasons-container">
        {reasons.map((reason, id) => (
          <div className="reason" key={id} data-aos="fade-left">
            <div className="reasonTitle">
              <div className="whyText">{reason.title}</div>
              <img src={reason.image} alt='Icon' className='whyIcon' />
            </div>

            <p className="reasonDesc">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};