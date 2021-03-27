import { FC } from "react";

type Props = {
	size?: string;
};

export const Cancel: FC<Props> = ({ size }) => {
	return (
		<svg
			// className="w-6 h-6"
			className={`like-icon cursor-pointer ${!size ? `w-6 h-6` : size}`}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	);
};
