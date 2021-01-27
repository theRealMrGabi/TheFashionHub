import cogoToast from "cogo-toast";
import { local, session } from "./storage";

export const generateActions = (action: string) => {
	action = action.toUpperCase();
	return {
		REQUEST: `${action}_REQUEST`,
		SUCCESS: `${action}_SUCCESS`,
		FAILURE: `${action}_FAILURE`,
	};
};

export const _isAnEmpytyObject = (obj: any) => {
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) return false;
	}
	return true;
};

export const getToken = () => {
	let token = "";
	const local_token = local.getObject("token").access;
	token =
		(_isAnEmpytyObject(local_token) ? "" : local_token) || session.get("token");
	return token;
};

export const getUser = () => {
	const local_user = local.getObject("user");
	const user = _isAnEmpytyObject(local_user) ? null : local_user;
	return user;
};

export const isUserLoggedIn = () => {
	const user = getUser();
	if (!_isAnEmpytyObject(user)) return true;
	return false;
};

export const showToast = (message: string, type?: string) => {
	if (type) type = type.toLowerCase();

	switch (type) {
		case "success":
			cogoToast.success(message, { position: "top-right" });
			break;
		case "info":
			cogoToast.info(message, { position: "top-right" });
			break;
		case "loading":
			cogoToast.loading(message, { position: "top-right" });
			break;
		case "warn":
			cogoToast.warn(message, { position: "top-right" });
			break;
		case "error":
			cogoToast.error(message, { position: "top-right" });
			break;

		default:
			cogoToast.info(message, { position: "top-right" });
			break;
	}
};

export const callbackToast = (message: any) => {
	const { hide } = cogoToast.loading(message, {
		hideAfter: 0,
		position: "top-right",
	});

	return hide;
};

export * from "./axios";
export * from "./storage";
