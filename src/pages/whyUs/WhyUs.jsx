import { images } from "../../constants";

export const WhyUs = () => {
  const reasons = [
    {
      id: "1",
      image: images.inventory,
      title: "Effortless Inventory Management",
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
      title: "Actionable Business Analytics",
      description:
        "Make data-driven decisions with comprehensive reports that unlock valuable customer and business performance insights.",
    },
    {
      id: "4",
      image: images.credit,
      title: "Unlock Financial Potential",
      description:
        "Our unique credit score solutions can open doors to financing opportunities, empowering your restaurant&#39;s growth.",
    },
    {
      id: "5",
      image: images.orderReservation,
      title: "Effortless Orders & Reservations",
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
          <div className="reason" key={id}>
            <div className="reasonTitle">
              <img src={reason.image} alt='Icon' className='whyIcon' />
              <div className="whyText">{reason.title}</div>
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
