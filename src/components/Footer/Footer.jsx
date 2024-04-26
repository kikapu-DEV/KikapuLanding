import { BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

export const Footer = () => {
	return (
		<div className='footerContainer'>
			<div className='footerLogo'>
				<h2>
					Kikapu<span style={{ color: "#18D26E" }}>.</span>
				</h2>
			</div>

			<div className='footerDetails'>
				<div className='topInfo'>
					<div>
						<a href='mailto: info@kikapuapp.com' className='contact-email'>
							info@kikapuapp.com
						</a>
					</div>
					<span className='pipe' />
					<div>
						<a href='tel:+254723456789' className='contact-phone'>
							+2547 23 456 789
						</a>
					</div>
				</div>

				<div className='bottomInfno'>
					<p style={{ textAlign: "center" }} className='copyRemove'>
						{" "}
						&copy; Copyright {new Date().getFullYear()} Kikapu. All Right
						Reserved.
					</p>
				</div>
			</div>

			<div className='FooterSocials'>
				<BsLinkedin />
				<BsTwitter />
				<BsInstagram />
			</div>

			<p style={{ textAlign: "center" }} className='copyright'>
				{" "}
				&copy; Copyright 2023 Kikapu. All Right Reserved.
			</p>
		</div>
	);
};
