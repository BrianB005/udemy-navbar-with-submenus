import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {
  NavSubmenuReducer,
  SubmenuReducer,
  SubSubMenuReducer,
} from "./reducers";
const initialState = {};
const reducer = combineReducers({
  submenu: SubmenuReducer,
  subsubmenu: SubSubMenuReducer,
  navSubmenu: NavSubmenuReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
