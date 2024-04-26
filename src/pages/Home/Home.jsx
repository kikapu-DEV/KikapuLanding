// import { Link } from 'react-router-dom'
import { useState } from "react";
import womanFruits from "../../assets/fruitHome.png";
import playStore from "../../assets/icons/playStore.png";
import appStore from "../../assets/icons/appStore.png";
import { Link } from "react-router-dom";

export const Home = () => {
	const [isWaitlist] = useState(true);
	return (
		<div className='homeContainer'>
			<div className='homeLeft'>
				<div className='homeLeftContent'>
					{/* <p style={{ fontSize: "24px" }} className='title'>
						The African Food Basket
					</p> */}
					<p>
						Kikapu App Food Basket:{" "}
						<span style={{ color: "#18D26E", fontStyle: "italic" }}>
							Everything food, restaurants and payments.
						</span>{" "}
					</p>
					<p className='leftText'>
						Kikapuapp is the all-in-one app for restaurants to manage inventory,
						manage orders and reservations, receive payments, access credits and
						view business analytics in real time AND for USERS to order
						delicious meals, manage pre-paid meal accounts, make payments and
						access credits on the same while making "bid-able"
						experiences in restaurants.
					</p>

					<div className='appLinks'>
						{isWaitlist && (
							<Link href='/#' className='link'>
								Join the waitlist
							</Link>
						)}
						{!isWaitlist && (
							<>
								<Link to={"#"}>
									<img src={playStore} alt='playStore' />
								</Link>
								<Link to={"#"}>
									<img src={appStore} alt='appStore' />
								</Link>
							</>
						)}
					</div>
				</div>
			</div>
			<div className='homeRight'>
				<img src={womanFruits} alt='LadyWithBasket' />
			</div>
		</div>
	);
};
