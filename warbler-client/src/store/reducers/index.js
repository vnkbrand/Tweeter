import { combineReducers } from "redux";

import currentUser from "./currentUser";
import errors from "./errors";

//combine the reducers - erros and currentUser - bundles into rootReducer
const rootReducer = combineReducers({ currentUser, errors });

export default rootReducer;