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

  const customers = [
    {
      id: "1",
      title: "Effortless Reservations",
      description: "Secure your table at your favorite restaurants with just a few taps on your device. No more waiting on hold—simply choose your desired time and party size, and we'll handle the rest."
    },
    {
      id: "2",
      title: "Discover New Favorites",
      description: "Dive into a world of culinary delights by exploring an extensive selection of restaurants, cuisines, and menu items. Whether you're craving something familiar or eager to try something new, our platform helps you find your next obsession with ease."
    },
    {
      id: "3",
      title: "Digital Interactive E-menus",
      description: "Browse through detailed and interactive digital menus before you even set foot in the restaurant. Customize your order to your liking and place it directly from your device for a seamless dining experience."
    },
    {
      id: "4",
      title: "Table Service Made Easy",
      description: "Enjoy a smooth dining experience with seamless table service and efficient order processing. Your orders are sent directly to the kitchen, ensuring that your meal arrives exactly as you ordered, without delays."
    },
    {
      id: "5",
      title: "Secure and Seamless Payments",
      description: "Pay for your meals with confidence, knowing that your payment information is protected. Choose from a variety of secure payment methods, including credit cards, digital wallets, and more."
    },
    {
      id: "6",
      title: "Exclusive Offers",
      description: "Take advantage of special discounts, promotions, and loyalty rewards tailored just for you. From time-limited deals to member-only perks, our platform helps you save while enjoying the best dining experiences."
    }
  ];
  
  const restaurants = [
    {
      id: "1",
      title: "Boost Revenue",
      description: "Increase your restaurant's sales and profitability with KIKAPU's powerful marketing tools. Attract more customers and keep them coming back with targeted promotions and featured listings."
    },
    {
      id: "2",
      title: "Streamlined Operations",
      description: "Simplify your restaurant's daily operations with our intuitive platform. Effortlessly manage reservations, optimize table turnover, and handle orders efficiently, all from a single dashboard."
    },
    {
      id: "3",
      title: "Increased Customer Satisfaction",
      description: "Elevate your dining experience by providing personalized service and real-time updates. Whether it’s customizing orders or updating customers on their meal status, KIKAPU helps you ensure every guest leaves happy."
    },
    {
      id: "4",
      title: "Increased Visibility",
      description: "Expand your reach and attract new customers by showcasing your restaurant on KIKAPU's platform. Gain access to a wider audience, including diners who might not have discovered you otherwise."
    },
    {
      id: "5",
      title: "Data-Driven Insights",
      description: "Harness the power of data to gain valuable insights into your customers' preferences and behavior. Use these insights to refine your menu, optimize pricing, and enhance the overall dining experience."
    },
    {
      id: "6",
      title: "Loyalty Program Integration",
      description: "Encourage repeat visits and build a loyal customer base by integrating a customizable loyalty program into your offerings. Reward your customers with points, discounts, and exclusive perks that keep them coming back."
    }
  ];
  


  return (
    <div className="whyContainer" id="about">
      <div className='whyUsHeading'>
				<span style={{ color: "#D9EEE8" }}>Why</span> KikapuApp?
			</div>

      {/* <div className="reasons-container">
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
      </div> */}

      <div className="reasons_container">
        <div className="customerCont f_box">
          <div className="featureHead">
            <span>Customers</span>
            <img src={images.customers} alt="customers" className="cusImg" />
          </div>

          <div className="f_grid">
            {customers.map ((item, id) => (
              <div className="cusItem featureItem" key={id}>
                <div className="cusTitle f_title">{item.title}</div>
                <div className="f_desc">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="resCont f_box">
          <div className="featureHead">
            <span>Restaurants</span>
            <img src={images.restHead} alt="restaurant" />
          </div>

          <div className="f_grid">
            {restaurants.map ((item, id) => (
              <div className="resItem featureItem" key={id}>
                <div className="resTitle f_title">{item.title}</div>
                <div className="f_desc">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};