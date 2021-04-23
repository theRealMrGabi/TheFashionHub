import { generateActions } from "utils";

export const ADD_ITEM_TO_CART = generateActions("ADD_ITEM_TO_CART");
export const REMOVE_ITEM_FROM_CART = generateActions("REMOVE_ITEM_FROM_CART");
export const CLEAR_ITEM = generateActions("CLEAR_ITEM");
export const EMPTY_CART = generateActions("EMPTY_CART");
export const LIKE_PRODUCT = generateActions("LIKE_PRODUCT");
export const UNLIKE_PRODUCT = generateActions("UNLIKE_PRODUCT");
