import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import { SHOW_HEADER, HIDE_HEADER, TOGGLE_HEADER } from "./header-actions";

const INITIAL_STATE = {
  show: true,
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_HEADER:
      return {
        ...state,
        show: true,
      };
    case HIDE_HEADER:
      return {
        ...state,
        show: false,
      };
    case TOGGLE_HEADER:
      return {
        ...state,
        show: !state.show,
      };
    default:
      return state;
  }
};

export default headerReducer;
