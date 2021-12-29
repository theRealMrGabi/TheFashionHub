import { FC } from "react";
import { Spinner } from "components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	btnType: "primary" | "secondary";
	loading?: boolean;
	rest?: any;
}

export const Button: FC<Props> = ({
	text,
	loading,
	className,
	btnType,
	onClick,
	...rest
}) => {
	return (
		<button
			onClick={onClick}
			disabled={loading || rest.disabled}
			{...rest}
			className={`button transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0
			${className}
			${btnType === "primary" && `primary`}
			${btnType === "secondary" && `secondary`}
			${loading && `opacity-100`}
			`}
		>
			{loading ? <Spinner /> : text}
		</button>
	);
};
