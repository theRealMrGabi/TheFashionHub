import { FC } from "react";
import { Mail, Phone } from "icons";
import { Link } from "react-router-dom";

export const Footer: FC = () => {
	return (
		<footer className="flex flex-col w-full">
			<div className="bg-grayWhite flex flex-col md:flex-row w-full pt-12 md:justify-evenly md:px-16 md:pb-20 px-8">
				<div className="flex flex-col md:w-4/12 mb-4 md:mb-0">
					<h4 className="mb-4 md:mb-8 font-normal md:font-medium text-xs not-italic">
						COMPANY
					</h4>

					<Link className="hover-animate footer-link" to="/about">
						About Us
					</Link>

					<Link className="footer-link  hover-animate" to="/careers">
						Careers
					</Link>

					<Link className="footer-link hover-animate" to="/advert">
						Advertising
					</Link>

					<Link className="footer-link hover-animate" to="/terms">
						Terms and Conditions
					</Link>
				</div>

				<div className="flex flex-col md:w-4/12 mb-4 md:mb-0">
					<h4 className="mb-4 md:mb-8 font-normal md:font-medium text-xs not-italic">
						CUSTOMER SERVICES
					</h4>

					<Link className="footer-link  hover-animate" to="/faq">
						FAQ's
					</Link>

					<Link className="footer-link  hover-animate" to="/contact">
						Contact Us
					</Link>

					<Link className="footer-link  hover-animate" to="/style-advice">
						Style and Fit Advice
					</Link>
				</div>

				<div className="flex flex-col md:w-4/12 mb-4 md:mb-0">
					<h4 className="mb-4 md:mb-8 font-normal md:font-medium text-xs not-italic">
						GET IN TOUCH
					</h4>
					<div className="flex footer-link  hover-animate">
						<span className="pr-2">
							<Phone />
						</span>
						<a href="tel:+23480567890">+23480567890</a>
					</div>

					<div className="flex footer-link  hover-animate">
						<span className="pr-2">
							<Mail />
						</span>
						<a href="mailto:support@thefashionhub.com" target="blank">
							support@thefashionhub.com
						</a>
					</div>
				</div>
			</div>

			<div className="bg-white h-32 font-normal text-black text-xs align-middle w-full text-center pt-12 md:px-16 px-8">
				&copy; {new Date().getFullYear()} theFashionHub. <br /> All Rights
				Reserved
			</div>
		</footer>
	);
};
