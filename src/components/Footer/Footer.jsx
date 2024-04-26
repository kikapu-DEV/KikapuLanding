import { BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

export const Footer = () => {
	return (
		<div className='footerContainer'>
			<div className='footerLogo'>
				<h2>
					Kikapuapp<span style={{ color: "#18D26E" }}>.</span>
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
						<a href='tel:+254745411549' className='contact-phone'>
							+254 745 411 549
						</a>
					</div>
				</div>

				<div className='bottomInfno'>
					<p style={{ textAlign: "center" }} className='copyRemove'>
						{" "}
						&copy; Copyright {new Date().getFullYear()} Kikapuapp. All Right
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
				&copy; Copyright {new Date().getFullYear()} Kikapuapp. All Right
				Reserved.
			</p>
		</div>
	);
};
