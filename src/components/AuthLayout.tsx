import { FC } from "react";
import { Footer, Navbar } from "components";
// import { useHistory } from "react-router-dom";
// import { isUserLoggedIn, showToast } from "utils";

export const AuthLayout: FC = ({ children }: any) => {
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
			<main>{children}</main>
			<Footer />
		</>
	);
};
