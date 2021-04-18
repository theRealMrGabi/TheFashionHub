import * as types from "../actions/types";

const initialState = {
	cart: [],
	likes: [],
};

const CartReducer = (state = initialState, { type, payload }: any) => {
	switch (type) {
		case types.ADD_TO_CART.REQUEST:
		case types.REMOVE_FROM_CART.REQUEST:
			return { ...state, ...payload };

		default:
			return state;
	}
};

export default CartReducer;
