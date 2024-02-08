import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItemList: []
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart: (state: any, action: any) => {
			const productIsAlreadyInCart = state.cartItemList.some((product: any) => product.id === action.payload.id);
			if (!productIsAlreadyInCart) {
				state.cartItemList = state.cartItemList.map((product: any) => {
					product.id === action.payload.id ? { ...product, quantity: product.quantity + 1 } : product;
				});
				return;
			}
			state.cartItemList = [...state.cartItemList, { ...action.payload, quantity: 1 }];
		},
		removeItemFromCart: (state: any, action: any) => {
			state.cartItemList = state.cartItemList.filter((product: any) => product.id !== action.payload);
		},
		increaseProductQuantity: (state: any, action: any) => {
			state.cartItemList = state.cartItemList.map((product: any) => {
				product.id === action.payload ? { ...product, quantity: product.quantity + 1 } : product;
			});
		},
		decreaseProductQuantity: (state: any, action: any) => {
			state.cartItemList = state.cartItemList
				.map((product: any) => {
					product.id === action.payload ? { ...product, quantity: product.quantity - 1 } : product;
				})
				.filter((product: any) => product.quantity > 0);
		}
	}
});

export const { addItemToCart, removeItemFromCart, increaseProductQuantity, decreaseProductQuantity } =
	cartSlice.actions;

export default cartSlice.reducer;
