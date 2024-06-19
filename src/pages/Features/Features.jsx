import { useEffect } from "react";
// import { images } from "../../constants";
import AOS from "aos";
import {
  ShieldCheck,
  CreditCard,
  FolderKanban,
  LineChart,
  Folder,
} from "lucide-react";

export const Features = () => {
  const featuresList = [
    {
      icon: <ShieldCheck color="#18D26E" size={50} />,
      title: "Secure Payment",
      class: "marketPlace",
      desc: "KikapuApp is a secure platform that ensures the safety of your data.",
      subFeatures: [
        "Data encryption.",
        "Secure payment gateways.",
        "Robust architecture.",
      ],
    },
    {
      icon: <CreditCard color="#18D26E" size={50} />,
      title: "Prepaid Meals",
      class: "wallet",
      desc: "Download the App & Eat Now!",
      subFeatures: [
        "Budgeting tool for students and parents.",
        "Credit system on meals for students and parents in case of insufficient funds.",
      ],
    },
    {
      icon: <FolderKanban color="#18D26E" size={50} />,
      title: "Inventory Management",
      class: "foodCredit",
      desc: "Top Up Your Child's Account & Ensure Peace of Mind.",
      subFeatures: [
        "Manage menus, orders and reservations.",
        "Data-driven sales to reduce food wastage per day.",
        "Access to credits to complete purchase from suppliers.",
      ],
    },
    {
      icon: <Folder color="#18D26E" size={50} />,
      title: "Credit Facility",
      class: "marketPlace",
      desc: "Partner with KikapuApp & Redefine the ordering processes for walk-in customers.",
      subFeatures: [
        "For restaurant and their expenses.",
        "For students and general users.",
      ],
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="FeaturesContainer" id="features">
      <h2 className="titleHeader">
        <span style={{ color: "#fff" }}>FEATURES IN</span> KIKAPUAPP
      </h2>

      <div className="featureRow">
        {featuresList.map((item, index) => (
          <div className="feature-card" data-aos="zoom-in">
            <div className="feature-icon">{item.icon}</div>
            <h4 className="title">{item.title}</h4>
            {/* <p className='desc'>{item.desc}</p> */}
            <ul className="subFeatures">
              {item.subFeatures.map((itm, idx) => (
                <li>{itm}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
