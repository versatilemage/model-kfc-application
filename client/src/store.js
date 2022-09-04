import { configureStore, combineReducers } from "@reduxjs/toolkit";
import menuReducer from "./redux/addNewmenu";

import IdentifierReducer from "./redux/kfcIdentifierSlice";

import KFCReducer from "./redux/kfcSlice";

const rootReducer = combineReducers({
  kfc: KFCReducer,
  kfcIdentifier: IdentifierReducer,
  KfcaddData: menuReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
