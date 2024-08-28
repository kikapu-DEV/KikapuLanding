import { useEffect } from "react";
import { images } from "../../constants";
import AOS from "aos";

export const Target = () => {
	const targetList = [
		{
			id: "1",
			icon: images.people,
			title: "Students & Parents",
			class: "wallet",
			desc: "Top-up the prepaid meal account and have peace of mind.",
		},
		{
			id: "2",
			icon: images.stall,
			title: "Restaurants & Vendors",
			class: "marketPlace",
			desc: "Partner with KikapuApp & Redefine the ordering processes for customers.",
		},
		{
			id: "3",
			icon: images.restaurant,
			title: "Restaurants & Walk-in Customers",
			class: "foodCredit",
			desc: "Make reservations, preorders, and pay for meals with ease.",
		},
	];

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<div className='TargetsContainer'>
			<div className='targetHeading'>
				<span style={{ color: "#2DA96B" }}>Who Is</span> KikapuApp For?
			</div>

			<div className='targetRow'>
				{targetList.map((item, id) => (
					<div key={id} className='target-card' data-aos='zoom-in'>
						<div>
							<img src={item.icon} alt='Icon' className='targetIcon' />
						</div>
						<div className='targetTitle'>{item.title}</div>
						<p className='targetDesc'>{item.desc}</p>
					</div>
				))}
			</div>
		</div>
	);
};
