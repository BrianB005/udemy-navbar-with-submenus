import {
  CLOSE_NAV_SUBMENU,
  CLOSE_SUBMENU,
  CLOSE_SUB_SUBMENU,
  OPEN_NAV_SUBMENU,
  OPEN_SUBMENU,
  OPEN_SUB_SUBMENU,
} from "./constants";

export const openSubmenu = (text) => (dispatch) => {
  dispatch({ type: OPEN_SUBMENU, payload: text });
};

export const closeSubmenu = () => (dispatch) => {
  dispatch({ type: CLOSE_SUBMENU });
};
export const openSubSubmenu = (text) => (dispatch) => {
  dispatch({ type: OPEN_SUB_SUBMENU, payload: text });
};
export const closeSubSubmenu = () => (dispatch) => {
  dispatch({ type: CLOSE_SUB_SUBMENU });
};

export const openNavSubmenu = (text,location) => (dispatch) => {
  // console.log(text);
  dispatch({ type: OPEN_NAV_SUBMENU, payload: text,location });
};

export const closeNavSubmenu = () => (dispatch) => {
  dispatch({ type: CLOSE_NAV_SUBMENU });
};
