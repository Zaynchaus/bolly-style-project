import { createStore, combineReducers } from "redux";

import { Handelreducer } from "../Reducer/HandleReducer"

const rootReducer = combineReducers({

  Handelreducer,

});

export const store = createStore(
  rootReducer,
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);