import { combineReducers } from "redux";
import headerReducer from "./header/header-reducer";

export const rootReducer = combineReducers({
  header: headerReducer,
});
