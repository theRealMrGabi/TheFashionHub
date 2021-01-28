import { FC } from "react";
import { Spinner } from "components";

type Props = {
	text: string;
	loading?: boolean;
	rest?: any;
};

export const Button: FC<Props> = ({ text, loading, ...rest }) => {
	return (
		<button
			disabled={loading}
			{...rest}
			className="px-5 py-2 items-center bg-primary-100 text-white font-normal border border-purple-100 rounded hover:bg-primary-400 hover:text-primary-100 hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
		>
			{loading ? <Spinner /> : text}
		</button>
	);
};
