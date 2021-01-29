import { combineReducers } from "redux";
//Reducers
import { authReducer } from "./authReducer";
import { postsReducer } from "./postReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
});

export default rootReducer;
