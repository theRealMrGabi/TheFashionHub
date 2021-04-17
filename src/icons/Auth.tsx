import { FC } from "react";

export const Human: FC = () => {
	return (
		<svg
			className="w-6 h-6"
			fill="none"
			stroke="#2d4059"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
			></path>
		</svg>
	);
};

export const HumanPlus: FC = () => {
	return (
		<svg
			className="w-6 h-6"
			fill="none"
			stroke="#2d4059"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
			></path>
		</svg>
	);
};
