import { useEffect } from "react";
import { images } from "../../constants";
import AOS from "aos";

export const Target = () => {
	const targetList = [
		{
			id: "1",
			icon: images.restaurant,
			title: "Are you a customer?",
			desc: "Secure your table at your favorite restaurants with just a few taps on your device.",
			link: 'https://play.google.com/store/apps/details?id=com.eldagenius.kikapustudents&hl=en_US'
		},
		{
			id: "2",
			icon: images.restaurantServe,
			title: "Are you a restaurant?",
			desc: "Simplify your restaurant's daily operations with our intuitive platform.",
			link: 'https://play.google.com/store/apps/details?id=com.eldagenius.kikapuvendors&hl=en_US'
		},
	];

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<article className="targetArticle">
			<div className="whyBg">
				<img src={images.foodPattern} alt="pattern" />
			</div>
			<div className='TargetsContainer'>
				<div className='targetHeading'>
					Get the App
				</div>

				<div className='targetRow'>
					{targetList.map((item, id) => (
						<div key={id} className='target-card' data-aos='zoom-in'>
							<div className="itemIcon">
								<img src={item.icon} alt='Icon' className='targetIcon' />
							</div>
							<div className='targetTitle'>{item.title}</div>
							<p className='targetDesc'>{item.desc}</p>
							
							<a href={item.link} className="getBtn" target="_blank">
								<span>Download</span>
								<span>
									<img src={images.download} alt="download" />
								</span>
							</a>
						</div>
					))}
				</div>
			</div>
		</article> 
	);
};
