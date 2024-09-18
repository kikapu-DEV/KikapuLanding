import { useState } from "react";
import { Navbar } from "../../components/Navbar/index";
import playStore from "../../assets/icons/playStore.png";
import appStore from "../../assets/icons/appStore.png";
import { Link } from "react-router-dom";
import {images} from "../../constants";

export const Home = () => {
  const [isWaitlist, setIswaitList] = useState(true);

  return (
    <div className="intro">
      <Navbar />
      <div className="home_container" id="homeCont">
        <div className="leftBox">
          <div className="title">
            Discover a New Age of Dining Experiences
          </div>

          <div className="desc">
            KIKAPU is more than just a food app; it's your personal dining companion, connecting you to a vibrant culinary scene and making it easier than ever to discover, reserve, and enjoy dining experiences.
          </div>

          <div className="appLinks">
            {isWaitlist && (
              <div className="tryApps">
                <a
                  href="https://play.google.com/store/apps/details?id=com.eldagenius.kikapuvendors&hl=en_US"
                  target="_blank"
                >
                  Get the vendors app
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.eldagenius.kikapustudents&hl=en_US"
                  target="_blank"
                >
                  Get the users app
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
        <div className="rightBox">
          <img src={images.resIll} alt="resill" />
        </div>
      </div>
    </div>
  );
};
