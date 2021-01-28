import { FC } from "react";
import { Link } from "react-router-dom";

export const Logo: FC = () => {
	return (
		<Link to="/">
			<div className="flex justify-center items-center">
				<span className="text-blackish font-extrabold text-2xl">the</span>
				<span className="text-primary-100 font-bold text-2xl">FASHIONHUB</span>
			</div>
		</Link>
	);
};

export const Hamburger: FC = () => {
	return (
		<svg
			className="w-6 h-6"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	);
};
