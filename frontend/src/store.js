import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const initialStore = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialStore,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
