import {
  CLOSE_NAV_SUBMENU,
  CLOSE_SUBMENU,
  CLOSE_SUB_SUBMENU,
  OPEN_NAV_SUBMENU,
  OPEN_SUBMENU,
  OPEN_SUB_SUBMENU,
} from "./constants";
import { Sublinks, topics } from "../data";
export const SubmenuReducer = (state = {}, action) => {
  switch (action.type) {
    case OPEN_SUBMENU:
      const sublink = Sublinks.find(
        (subLink) => subLink.category === action.payload
      );
      return { ...state, submenuOpen: true, links: sublink.sublinks };
    case CLOSE_SUBMENU:
      return { ...state, submenuOpen: false, links: [] };
    default:
      return state;
  }
};

export const SubSubMenuReducer = (state = {}, action) => {
  switch (action.type) {
    case OPEN_SUB_SUBMENU:
      const sublink = topics.find((topic) => topic.text === action.payload);

      return { ...state, subsubmenuOpen: true, topics: sublink.topics };
    case CLOSE_SUB_SUBMENU:
      return { ...state, subsubmenuOpen: false, topics: [] };
    default:
      return state;
  }
};

export const NavSubmenuReducer = (state = {}, action) => {
  switch (action.type) {
    case OPEN_NAV_SUBMENU:
      const sublink = Sublinks.find(
        (subLink) => subLink.category === action.payload.text
      );
      return {
        ...state,
        navSubmenuOpen: true,
        links: sublink.sublinks,
        location: action.payload.location,
      };
    case CLOSE_NAV_SUBMENU:
      return { ...state, navSubmenuOpen: false, links: [] };

    default:
      return state;
  }
};
