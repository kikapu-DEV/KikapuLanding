import { useEffect } from "react";
import { images } from "../../constants";
import AOS from "aos";

export const Features = () => {
	const featuresList = [
		{
			icon: images.vendor,
			title: "Security",
			class: "marketPlace",
			desc: "KikapuApp is a secure platform that ensures the safety of your data.",
			subFeatures: [
				"Data encryption.",
				"Secure payment gateways.",
				"Robust architecture.",
			],
		},
		{
			icon: images.students,
			title: "Prepaid Meals System",
			class: "wallet",
			desc: "Download the App & Eat Now!",
			subFeatures: [
				"Budgeting tool for students and parents.",
				"Credit system on meals for students and parents in case of insufficient funds.",
			],
		},
		{
			icon: images.parents,
			title: "Management Tool",
			class: "foodCredit",
			desc: "Top Up Your Child's Account & Ensure Peace of Mind.",
			subFeatures: [
				"Manage menus, orders and reservations.",
				"Data-driven sales to reduce food wastage per day.",
				"Access to credits to complete purchase from suppliers.",
			],
		},
		{
			icon: images.vendor,
			title: "Data Tool ",
			class: "marketPlace",
			desc: "Partner with KikapuApp & Redefine the ordering processes for walk-in customers.",
			subFeatures: [
				"Demand and supply simulations.",
				"Real-time geographical demands consumption data.",
			],
		},
	];

	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<div className='FeaturesContainer'>
			<h2 className='titleHeader'>
				<span style={{ color: "#fff" }}>FEATURES IN</span> KIKAPU
			</h2>

			<div className='featureRow'>
				{featuresList.map((item, index) => (
					<div className='feature-card' data-aos='zoom-in'>
						<div>
							<img src={item.icon} alt='Icon' className='icon' />
						</div>
						<h4 className='title'>{item.title}</h4>
						{/* <p className='desc'>{item.desc}</p> */}
						<ul className='subFeatures'>
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
