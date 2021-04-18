import * as types from "./types";
import axios from "utils/axios";
import { Dispatch } from "redux";
import { showToast } from "utils";

export const GetAllProducts = () => {
	return (successCallback?: any, errorCallback?: any) => (
		dispatch: Dispatch
	) => (
		// eslint-disable-next-line
		dispatch({ type: types.ALL_PRODUCTS.REQUEST, payload: [] }),
		axios.request(
			`GET`,
			`product`,
			(res: any) => {
				const payload = res?.data;
				dispatch({ type: types.ALL_PRODUCTS.SUCCESS, payload });
				successCallback?.();
			},
			(err: any) => {
				const payload = err?.message;
				dispatch({ type: types.ALL_PRODUCTS.FAILURE, payload });
				showToast(payload, "error");
				errorCallback?.();
			}
		)
	);
};

export const GetSingleProduct = () => {
	return (id: string, successCallback?: any, errorCallback?: any) => (
		dispatch: Dispatch
	) => (
		// eslint-disable-next-line
		dispatch({ type: types.GET_SINGLE_PRODUCT.REQUEST, payload: {} }),
		axios.request(
			`GET`,
			`product/${id}`,
			(res: any) => {
				const payload = res?.data;
				dispatch({ type: types.GET_SINGLE_PRODUCT.SUCCESS, payload });
				successCallback?.();
			},
			(err: any) => {
				const payload = err?.message;
				dispatch({ type: types.GET_SINGLE_PRODUCT.FAILURE, payload });
				showToast(payload, "error");
				errorCallback?.();
			}
		)
	);
};
