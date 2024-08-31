// import { Link } from 'react-router-dom'
import { useState } from "react";
// import womanFruits from "../../assets/fruitHome.png";
import kikapuLogo from "../../assets/kikapuLogo.png";
import { Navbar } from "../../components/Navbar/index";
import playStore from "../../assets/icons/playStore.png";
import appStore from "../../assets/icons/appStore.png";
import { Link } from "react-router-dom";

export const Home = () => {
  const [isWaitlist, setIswaitList] = useState(false);

  return (
    <div className="intro">
      <Navbar />
      <div className="homeContainer">
        <img src={kikapuLogo} alt="kikapu" className="logoHero" />

        {/* <div className="title">
          Everything Food, Restaurants & Payments
        </div> */}

        <div className="title">
          KIKAPU: Your Dining Companion
        </div>

        <div className="subTitle">
          Discover a World of Restaurants, Countless Flavors and New Age Dining Experiences.
        </div>

        <div className="desc">
        KIKAPU is more than just a food app; it's your personal dining companion, connecting you to a vibrant culinary scene and making it easier than ever to discover, reserve, and enjoy dining experiences.
        </div>

        <div className="appLinks">
          {isWaitlist && (
            <div className="tryApps">
              <a
                href="https://play.google.com/apps/testing/com.eldagenius.kikapustudents"
                target="_blank"
              >
                Try the vendors app
              </a>
              <a
                href="https://play.google.com/apps/testing/com.eldagenius.kikapuvendors"
                target="_blank"
              >
                Try the users app
              </a>
            </div>
          )}
          {!isWaitlist && (
            <div className="officialApps">
              <Link to={"#"} className="appDownload">
                <img src={playStore} alt="playStore" />
              </Link>
              <Link to={"#"} className="appDownload">
                <img src={appStore} alt="appStore" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
