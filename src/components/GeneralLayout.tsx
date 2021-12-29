import { FC } from "react";
import { Footer, Navbar } from "components";
import { Outlet } from "react-router-dom";

export const GeneralLayout: FC = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className="mx-4 md:mx-16">
				<Outlet />
				{children}
			</main>
			<Footer />
		</>
	);
};
