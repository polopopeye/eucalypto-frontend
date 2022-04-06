import { combineReducers } from "redux";
import counterSlice from "../../slices/counterSlice";

const counterReducer = combineReducers({
  main: counterSlice.reducer,
  thisIsAnother: counterSlice.reducer,
});

export default counterReducer;
