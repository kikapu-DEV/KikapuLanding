// import { Link } from 'react-router-dom'
import { useState } from "react";
// import womanFruits from "../../assets/fruitHome.png";
import kikapuLogo from "../../assets/kikapuLogo.png";

import playStore from "../../assets/icons/playStore.png";
import appStore from "../../assets/icons/appStore.png";
import { Link } from "react-router-dom";

export const Home = () => {
  const [isWaitlist] = useState(true);
  return (
    <div className="homeContainer">
      <div className="homeLeft">
        <div className="homeLeftContent">
          {/* <p style={{ fontSize: "24px" }} className='title'>
						The African Food Basket
					</p> */}
          <p>
            Kikapuapp Food Basket:{" "}
            <span style={{ color: "#18D26E", fontStyle: "italic" }}>
              Everything food, restaurants and payments.
            </span>{" "}
          </p>
          <p className="leftText">
            Kikapuapp is the all-in-one app for restaurants to manage inventory,
            manage orders and reservations, receive payments, access credits and
            view business analytics in real time AND for USERS to order
            delicious meals, manage pre-paid meal accounts, make payments and
            access credits on the same while making "bid-able"
            experiences in restaurants.
          </p>

          <div className="appLinks">
            {isWaitlist && (
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a
                  href="https://play.google.com/apps/testing/com.eldagenius.kikapustudents"
                  className="link"
                  target="_blank"
                >
                  Try the vendors app
                </a>
                <a
                  href="https://play.google.com/apps/testing/com.eldagenius.kikapuvendors"
                  className="link"
                  target="_blank"
                >
                  Try the users app
                </a>
              </div>
            )}
            {!isWaitlist && (
              <>
                <Link to={"#"}>
                  <img src={playStore} alt="playStore" />
                </Link>
                <Link to={"#"}>
                  <img src={appStore} alt="appStore" />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="homeRight">
        <img src={kikapuLogo} alt="kikapuLogo" />
      </div>
    </div>
  );
};
