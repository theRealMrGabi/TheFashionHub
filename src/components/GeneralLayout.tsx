import { FC } from "react";
import { Footer, Navbar } from "components";

type Props = {
	children: any;
};

export const GeneralLayout: FC<Props> = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className="mx-8 md:mx-16">{children}</main>
			<Footer />
		</>
	);
};
