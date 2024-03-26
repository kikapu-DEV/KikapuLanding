import { images } from "../../constants";


export const Features = () => {
  const featuresList = [
    {
      icon: images.students,
      title: "Students",
      class: "wallet",
      desc: "Download the App & Eat Now!",
    },
    {
      icon: images.parents,
      title: "Parents",
      class: "foodCredit",
      desc: "Top Up Your Child's Account & Ensure Peace of Mind",
    },
    {
      icon: images.vendor,
      title: "Vendors",
      class: "marketPlace",
      desc: "Partner with KikapuApp & Redefine the ordering processes for walk-in customers",
    },
  ];
  return (
    <div className="FeaturesContainer">
      <h2>
        <span style={{ color: "#18D26E" }}>OUR</span> FEATURES
      </h2>

      <div className="featureRow">
      {
        featuresList.map((item, index) => (
          <div className="card">
            {
              item.title
            }
          </div>
        ))
        }
      </div>
      </div>
  );
};
