import { FC } from "react";
import { Footer, Navbar } from "components";
// import { useHistory } from "react-router-dom";
// import { isUserLoggedIn, showToast } from "utils";

type Props = {
	children: any;
};

export const AuthLayout: FC<Props> = ({ children }) => {
	// const history = useHistory();
	// useEffect(() => {
	// 	if (!isUserLoggedIn()) {
	// 		showToast("Login to view this page", "danger");
	// 		return history.push("/login");
	// 	}
	// }, [history]);

	return (
		<>
			<Navbar />
			<main className="mx-8 md:mx-16">{children}</main>
			<Footer />
		</>
	);
};
