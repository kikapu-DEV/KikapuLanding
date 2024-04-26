import React, { useEffect } from "react";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Partners = () => {
	const partners = [
		{
			name: "Microsoft For Startups",
			logo: "https://blogs.microsoft.com/wp-content/uploads/prod/2018/02/Microsoft-for-Startups.jpg",
		},
	];
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<div className='PContainer'>
			<h2 className='partners-header'>Our Partners</h2>
			<div className='partners-container'>
				<Swiper
					spaceBetween={30}
					slidesPerView={3}
					autoplay={{ delay: 2500, disableOnInteraction: false }}
					className='partners-cards-container'
					breakpoints={{
						0: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						640: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 50,
						},
					}}
				>
					{partners.map((item, index) => (
						<SwiperSlide key={index}>
							<div className='partner-card'>
								<img src={item.logo} alt={`logo-${item.name}`} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Partners;
