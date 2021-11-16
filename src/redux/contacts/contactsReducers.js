import { combineReducers } from "redux";
import { ADD, DEL, FILTER, PUT } from "./contactsConstants";

const reducerItems = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];
    case DEL:
      return state.filter((item) => item.id !== payload);
    case PUT:
      return payload;
    default:
      return state;
  }
};

const reducerFilter = (state = "", { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;
    default:
      return state;
  }
};

export const reducerContacts = combineReducers({
  items: reducerItems,
  filter: reducerFilter,
});
