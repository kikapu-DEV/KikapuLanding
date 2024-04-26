import { useEffect } from "react";
import { images } from "../../constants";
import AOS from "aos";

export const Target = () => {
	const targetList = [
		{
			icon: images.students,
			title: "Students & Parents",
			class: "wallet",
			desc: "Top-up the prepaid meal account and have peace of mind.",
		},
		{
			icon: images.vendor,
			title: "Restaurants & Vendors",
			class: "marketPlace",
			desc: "Partner with KikapuApp & Redefine the ordering processes for walk-in customers.",
		},
		{
			icon: images.parents,
			title: "Restaurants & Walk-in Customers",
			class: "foodCredit",
			desc: "Make reservations, preorders, and pay for meals with ease.",
		},
	];

	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<div className='TargetsContainer'>
			<h2 className='titleHeader'>
				<span style={{ color: "#18D26E" }}>WHO IS</span> KIKAPUAPP FOR?
			</h2>

			<div className='targetRow'>
				{targetList.map((item, index) => (
					<div key={index} className='target-card' data-aos='zoom-in'>
						<div>
							<img src={item.icon} alt='Icon' className='icon' />
						</div>
						<h4 className='title'>{item.title}</h4>
						<p className='desc'>{item.desc}</p>
					</div>
				))}
			</div>
		</div>
	);
};
