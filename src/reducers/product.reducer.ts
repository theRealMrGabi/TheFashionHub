import * as types from "../actions/types";

const initialState = {
	loading: false,
	products: [],
	product: {},
};

const ProductReducer = (state = initialState, { type, payload }: any) => {
	switch (type) {
		case types.ALL_PRODUCTS.REQUEST:
		case types.GET_SINGLE_PRODUCT.REQUEST:
			return { ...state, loading: true, ...payload };

		case types.ALL_PRODUCTS.SUCCESS:
		case types.ALL_PRODUCTS.FAILURE:
			return { ...state, loading: false, products: payload };

		case types.GET_SINGLE_PRODUCT.SUCCESS:
		case types.GET_SINGLE_PRODUCT.FAILURE:
			return { ...state, loading: false, product: payload };

		default:
			return state;
	}
};

export default ProductReducer;
