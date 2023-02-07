import { combineReducers } from "redux";

import portfolios from "./portfolio";
import { entryReducer } from "./entryPageReducer";

export const reducers = combineReducers({ portfolios, entryReducer });
