import { FC } from "react";
import { Footer, Navbar } from "components";

export const GeneralLayout: FC = ({ children }: any) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
};
