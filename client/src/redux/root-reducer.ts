import { combineReducers } from 'redux';

import cartReducer from './slices/cartSlice.ts';

const rootReducer = combineReducers({ cartReducer });

export default rootReducer;
