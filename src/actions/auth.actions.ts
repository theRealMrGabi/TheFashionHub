import * as types from "./types";
import axios from "utils/axios";
import { useDispatch } from "react-redux";
import { showToast } from "utils";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (data: any, successCallback?: any, errorCallback?: any) => (
		// eslint-disable-next-line
		dispatch({ type: types.SIGNUP.REQUEST }),
		axios.request(
			"POST",
			`/auth/signup`,
			(res: any) => {
				const { token, user } = res.data;

				dispatch({ type: types.SIGNUP.SUCCESS, payload: user });
				localStorage.setItem("token", token);
				localStorage.setItem("user", JSON.stringify(user));
				navigate("/");
				successCallback?.();
			},
			(err: any) => {
				dispatch({ type: types.SIGNUP.FAILURE });
				showToast(err.message, "error");
				errorCallback?.();
			},
			data
		)
	);
};
