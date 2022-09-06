import { configureStore, combineReducers } from "@reduxjs/toolkit";

import menuReducer from "./redux/addNewmenu";

import erasingreducer from "./redux/deleteSlice";

import IdentifierReducer from "./redux/kfcIdentifierSlice";

import KFCReducer from "./redux/kfcSlice";

import updatedReducer from "./redux/updatemenu";

const rootReducer = combineReducers({
  kfc: KFCReducer,
  kfcIdentifier: IdentifierReducer,
  KfcaddData: menuReducer,
  kfcupdate: updatedReducer,
  delKfc: erasingreducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
