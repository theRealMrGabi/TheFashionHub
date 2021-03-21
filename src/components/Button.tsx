import { FC } from "react";
import { Spinner } from "components";

type Props = {
	text: string;
	type: string;
	loading?: boolean;
	rest?: any;
	className?: any;
};

export const Button: FC<Props> = ({
	text,
	loading,
	className,
	type,
	...rest
}) => {
	return (
		<button
			disabled={loading}
			{...rest}
			className={`button transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0
			${type === "primary" && `primary`}
			${type === "secondary" && `secondary`} ${className} `}
		>
			{loading ? <Spinner /> : text}
		</button>
	);
};
