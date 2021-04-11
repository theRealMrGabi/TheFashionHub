import { FC } from "react";
import { AuthNavbar } from "components";
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
		<div className="w-full bg-grayWhite">
			<header className="bg-white">
				<AuthNavbar />
			</header>
			<main className="mx-8 md:mx-16">{children}</main>
		</div>
	);
};
