import { BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import {images} from "../../constants";

export const Footer = () => {
	return (
		<div className='footerContainer' id="footer">
			<div className='footerFlex'>
				<div className='footerLogo'>
					Kikapuapp<span style={{ color: "#18D26E" }}>.</span>
				</div>

				<div className='footerContact'>
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
				</div>

				<div className='FooterSocials'>
					<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
						<BsLinkedin className="f_link" />
					</a>
					<a href="https://x.com/Kikapuapp" target="_blank" rel="noopener noreferrer">
						<BsTwitter className="f_link" />
					</a>
					<a href="https://www.instagram.com/kikapufoods/" target="_blank" rel="noopener noreferrer">
						<BsInstagram className="f_link" />
					</a>
				</div>
			</div>

			<div className="partnerBox">
				<div className="partnerTitle">
					In Partnership with
				</div>
				<div className="partnerDetails">
					<img src={images.msStartup} alt="msStartup" />
					<div className="partnerName">Microsoft For Startups</div>
				</div>
			</div>

			<p style={{ textAlign: "center" }} className='copyright'>
				{" "}
				&copy; Copyright {new Date().getFullYear()} Kikapuapp. All Right
				Reserved.
			</p>
		</div>
	);
};
