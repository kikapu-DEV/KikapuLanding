import { useEffect } from "react";
import { images } from "../../constants";
import AOS from "aos";
export const Features = () => {
  const featuresList = [
    {
      icon: images.students,
      title: "Students",
      class: "wallet",
      desc: "Download the App & Eat Now!",
    },
    {
      icon: images.vendor,
      title: "Vendors",
      class: "marketPlace",
      desc: "Partner with KikapuApp & Redefine the ordering processes for walk-in customers",
    },
    {
      icon: images.parents,
      title: "Parents",
      class: "foodCredit",
      desc: "Top Up Your Child's Account & Ensure Peace of Mind",
    },
  ];

  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);
  return (
    <div className="FeaturesContainer">
      <h2 className="titleHeader">
        <span style={{ color: "#18D26E" }}>WHO IS</span> KIKAPU FOR?
      </h2>

      <div className="featureRow">
        {featuresList.map((item, index) => (
          <div className="card" data-aos="zoom-in">
            <div>
              <img src={item.icon} alt="Icon" className="icon" />
            </div>
            <h4 className="title">{item.title}</h4>
            <p className="desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
