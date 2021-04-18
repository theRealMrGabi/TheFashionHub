import * as types from "./types";
import { Dispatch } from "redux";
import { showToast } from "utils";

export const AddItemsTocart = () => {
	return (itemToAdd: any) => (dispatch: Dispatch, getState: any) => {
		let payload;
		const state = getState();
		const { cart } = state.cart;

		const existingCartItem = cart?.find(
			(items: any) => items._id === itemToAdd._id
		);

		if (existingCartItem) {
			payload = cart?.map((item: any) =>
				item._id === itemToAdd._id
					? { ...item, quantity: item.quantity + 1 }
					: { ...item }
			);
		} else {
			payload = [...cart, { ...itemToAdd, quantity: 1 }];
		}
		showToast("Added to cart", "info");
		return dispatch({ type: types.ADD_ITEM_TO_CART, payload });
	};
};
