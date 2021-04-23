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

export const RemoveItemsFromcart = () => {
	return (itemToRemove: any) => (dispatch: Dispatch, getState: any) => {
		let payload;
		const state = getState();
		const { cart } = state.cart;

		const existingCartItem = cart?.find(
			(items: any) => items._id === itemToRemove._id
		);

		if (existingCartItem) {
			return (payload = cart?.filter(
				(item: any) => item._id !== itemToRemove._id
			));
		} else {
			payload = cart?.filter((item: any) =>
				item._id === itemToRemove._id
					? { ...item, quantity: item.quantity - 1 }
					: { ...item }
			);
			showToast("Item removed from cart", "info");
			return dispatch({ type: types.REMOVE_ITEM_FROM_CART, payload });
		}
	};
};

export const ClearItemFromcart = () => {
	return (itemToClear: any) => (dispatch: Dispatch, getState: any) => {
		const state = getState();
		const { cart } = state.cart;

		const payload = cart?.filter((item: any) => item._id !== itemToClear._id);
		showToast("Item removed from cart", "info");
		return dispatch({ type: types.CLEAR_ITEM, payload });
	};
};

export const EmptyCart = () => {
	return (successCallback?: any) => (dispatch: Dispatch) => {
		dispatch({ type: types.EMPTY_CART, payload: [] });
		showToast("Cart emptied", "info");
		successCallback?.();
	};
};
