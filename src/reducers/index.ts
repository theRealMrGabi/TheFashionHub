import { combineReducers } from "redux";

import auth from "./auth.reducer";
import cart from "./cart.reducer";
import products from "./product.reducer";

const rootReducer = combineReducers({
	auth,
	cart,
	products,
});

export default rootReducer;
