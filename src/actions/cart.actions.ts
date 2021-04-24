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

		localStorage.setItem("cart", JSON.stringify(payload));
		showToast("Added to cart", "info");
		return dispatch({ type: types.ADD_ITEM_TO_CART, payload });
	};
};

export const ReduceItemsFromcart = () => {
	return (itemToRemove: any) => (dispatch: Dispatch, getState: any) => {
		let payload;
		const state = getState();
		const { cart } = state.cart;

		const existingCartItem = cart?.find(
			(items: any) => items._id === itemToRemove._id
		);

		if (existingCartItem.quantity === 1) {
			payload = cart?.filter(
				(items: any) => items._id !== existingCartItem._id
			);
		} else {
			payload = cart?.map((items: any) =>
				items._id === itemToRemove._id
					? { ...items, quantity: items.quantity - 1 }
					: items
			);
		}

		localStorage.removeItem("cart");
		localStorage.setItem("cart", JSON.stringify(payload));
		showToast("Item removed from cart", "info");
		return dispatch({ type: types.REMOVE_ITEM_FROM_CART, payload });
	};
};

export const ClearItemFromcart = () => {
	return (itemToClear: any) => (dispatch: Dispatch, getState: any) => {
		const state = getState();
		const { cart } = state.cart;

		const payload = cart?.filter((item: any) => item._id !== itemToClear._id);
		localStorage.removeItem("cart");
		localStorage.setItem("cart", JSON.stringify(payload));
		showToast("Item removed from cart", "info");
		return dispatch({ type: types.CLEAR_ITEM, payload });
	};
};

export const EmptyCart = () => {
	return (successCallback?: any) => (dispatch: Dispatch) => {
		dispatch({ type: types.EMPTY_CART, payload: [] });
		localStorage.removeItem("cart");
		showToast("Cart emptied", "info");
		successCallback?.();
	};
};
