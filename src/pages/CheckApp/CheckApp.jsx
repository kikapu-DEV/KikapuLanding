import leftRest from "../../assets/leftRest.png";
import center from "../../assets/centerCust.png";
import right from "../../assets/rightSupp.png";
import home from "../../assets/homescreen.png";
import wallet from "../../assets/walletscreen.png";
import restaurant from "../../assets/restaurantscreen.png";
import order from "../../assets/orderscreen.png";
export const CheckApp = () => {
  return (
    <div className="checkAppContainer">
      <h2>
        CHECKOUT OUR APP{" "}
        <span style={{ color: "#18D26E" }}>INTERFACE LOOK</span>{" "}
      </h2>

      <div className="checkAppDisplay">
        <div className="lower">
          <img
            src={home}
            alt="checkAPP"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="center">
          <img
            src={restaurant}
            alt="checkAPP"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="lower">
          <img
            src={order}
            alt="checkAPP"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};
