import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middleares = [logger];

const store = legacy_createStore(rootReducer, applyMiddleware(...middleares));

export default store;