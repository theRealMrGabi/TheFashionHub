import { generateActions } from "utils";

export const ADD_ITEM_TO_CART = generateActions("ADD_ITEM_TO_CART");
export const REMOVE_ITEM_FROM_CART = generateActions("REMOVE_ITEM_FROM_CART");
export const CLEAR_CART = generateActions("CLEAR_CART");
export const LIKE_PRODUCT = generateActions("LIKE_PRODUCT");
export const UNLIKE_PRODUCT = generateActions("UNLIKE_PRODUCT");
