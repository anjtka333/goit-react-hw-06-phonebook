import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducerContacts } from "./contacts/contactsReducers";

const rootReducer = combineReducers({
  contacts: reducerContacts,
});

const store = createStore(
  rootReducer,
  composeWithDevTools()
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
