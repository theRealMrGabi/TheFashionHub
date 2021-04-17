import * as types from "./types";
import axios from "utils/axios";
import { useDispatch } from "react-redux";

import { showToast, local } from "utils";
import { useHistory } from "react-router-dom";

export const SignUp = () => {
	const history = useHistory();
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
				local.set("token", token);
				local.setObject("user", user);
				history.push("/");
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
