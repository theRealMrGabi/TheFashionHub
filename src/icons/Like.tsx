import { FC } from "react";

type Props = {
	card?: boolean;
	size?: string;
	liked?: boolean;
};

export const Like: FC<Props> = ({ size, liked }) => {
	return (
		<svg
			className={`like-icon ${!size ? `w-6 h-6` : size}`}
			// fill="none"
			fill={`${liked ? "red" : "none"}`}
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
			/>
		</svg>
	);
};
