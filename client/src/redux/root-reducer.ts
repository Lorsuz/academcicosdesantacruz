import { combineReducers } from 'redux';

import cartSlice from './slices/cartSlice.ts';
// import userSlice from './slices/userSlice.ts';

const rootReducer = combineReducers({ cartSlice /* , userSlice */ });

export default rootReducer;
