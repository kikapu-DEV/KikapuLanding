import wallet from "../../assets/icons/wallet.png";
import foodCredit from "../../assets/icons/foodCredit.png";
import marketplace from "../../assets/icons/marketPlace.png";
import speedee from "../../assets/icons/speedee.png";
import featurePhone from "../../assets/icons/featurePhone.png";

export const Features = () => {
  const featuresList = [
    { icon: wallet, title: "Mobile Wallet", class: 'wallet', desc: 'Streamlined and secure financial transactions' },
    { icon: foodCredit, title: "Food credit", class: 'foodCredit', desc: 'Kikapu provides loans at very low interest to help complete the transactions.' },
    { icon: marketplace, title: "Dynamic Marketplace", class: 'marketPlace', desc: 'Payment is held in an escrow feature until the goods are delivered to the buyer ' },
    { icon: speedee, title: "Speedee service system", class: 'speedee', desc: 'This feature streamlines the ordering process,' },
  ];
  return (
    <div className="FeaturesContainer">
      <h2>
        <span style={{ color: "#18D26E" }}>OUR</span> FEATURES
      </h2>
      <div className="featuresBox">
        <div className="featuresList">
            {featuresList.map((list, index) => (
              <div className={`list ${list.class}`} key={index}>
                <img src={list.icon} alt="icons" />
                <p style={{color: "#18D26E"}}>{list.title}</p>
                <p className="featureDesc">{list.desc}</p>
              </div>
            ))}
        </div>
        <img className="centerImg" src={featurePhone} alt="featurePhone"/>
      </div>
    </div>
  );
};
