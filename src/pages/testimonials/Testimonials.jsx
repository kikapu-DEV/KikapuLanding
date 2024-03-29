import React, { useEffect } from "react";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Testimonials = () => {
	const testimonials = [
		{
			title:
				"If you do the job badly enough, sometimes you don't get asked to do it again.",
			t2: "Wisteria Ravenclaw",
			t3: "Google Inc.",
		},
		{
			title:
				"I'm killing time while I wait for life to shower me with meaning and happiness.",
			t2: "Wisteria Ravenclaw",
			t3: "Google Inc.",
		},
		{
			title:
				"The only skills I have the patience to learn are those that have no real application in life.",
			t2: "Wisteria Ravenclaw",
			t3: "Google Inc.",
		},
		{
			title: "I'm not lazy I'm just in energy saving mode.",
			t2: "Wisteria Ravenclaw",
			t3: "Google Inc.",
		},
	];
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<div className='TContainer'>
			<h2 style={{ textAlign: "center", padding: "70px 0" }}>Testimonials</h2>
			<div className=''>
				<Swiper
					spaceBetween={30}
					slidesPerView={3}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => console.log(swiper)}
					className='testimonialsContainer'
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
					{testimonials.map((item, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<SwiperSlide key={index} className='snip1533'>
							<figure data-aos='flip-left'>
								<figcaption>
									<blockquote>
										<p>{item.title}</p>
									</blockquote>
									<h3>{item.t2}</h3>
									<h4>{item.t3}</h4>
								</figcaption>
							</figure>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Testimonials;
