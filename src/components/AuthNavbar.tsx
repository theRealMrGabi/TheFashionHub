import { FC } from "react";
import { Logo, RoundPhone, Secure } from "icons";

export const AuthNavbar: FC = () => {
	return (
		<div className="auth-navbar mt-2 mb-16 md:mb-8 mx-8 md:mx-16 flex flex-row justify-center md:justify-between items-center">
			<div className="hidden md:flex items-center">
				<Secure />
				<p className="secure">Secure Checkout</p>
			</div>

			<Logo />

			<p className="hidden md:block help">Need Help?</p>

			<a href="tel:2348123456" className="hidden md:flex items-center">
				<RoundPhone />
				<p className="phone">+2348123456</p>
			</a>
		</div>
	);
};
