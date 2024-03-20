// import { Link } from 'react-router-dom'
import womanFruits from '../../assets/fruitHome.png'
// import playStore from '../../assets/icons/playStore.png'
// import appStore from '../../assets/icons/appStore.png'

export const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeLeft">
        <div className="homeLeftContent">
          <p style={{ fontSize: "24px" }} className='title'>The African Food Basket</p>
          <p>
            KikapuApp Food Basket:{" "}
            <span style={{ color: "#18D26E" }}>
              Your Financial Food Partner.
            </span>{" "}
          </p>
          <p className="leftText">
            KikapuApp is the all-in-one app for students to order delicious
            meals, manage pre-paid meals accounts, and vendors to reach a hungry
            student audience - all on one secure platform.
          </p>

          {/* <h3><span style={{color: '#18D26E'}}>DOWNLOAD</span> APP NOW</h3> */}
          <div className="appLinks">
            <a href="/#" className="link">
              Join the waitlist
            </a>
            {/* <Link to={'#'}><img src={playStore} alt='playStore'/></Link>
          <Link to={'#'}><img src={appStore} alt='appStore'/></Link> */}
          </div>
        </div>
      </div>
      <div className="homeRight">
        <img src={womanFruits} alt="LadyWithBasket" />
      </div>
    </div>
  );
}

