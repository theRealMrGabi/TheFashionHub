import { FC } from "react";
import { AuthNavbar } from "components";
// import { useNavigate } from "react-router-dom";
// import { isUserLoggedIn, showToast } from "utils";

export const AuthLayout: FC = ({ children }) => {
	// const navigate = useNavigate();
	// useEffect(() => {
	// 	if (!isUserLoggedIn()) {
	// 		showToast("Login to view this page", "danger");
	// 		return navigate("/login");
	// 	}
	// }, [navigate]);

	return (
		<div className="w-full bg-grayWhite">
			<header className="bg-white">
				<AuthNavbar />
			</header>
			<main className="mx-8 md:mx-16">{children}</main>
		</div>
	);
};
