import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//Redux persisted state
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//thunk
import thunk from "redux-thunk";
//Reducer
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
const persistor = persistStore(store);

export { store, persistor };
