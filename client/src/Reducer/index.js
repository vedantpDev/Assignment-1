import { combineReducers } from "redux";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
  bookData: dataReducer,
});

export default rootReducer;
