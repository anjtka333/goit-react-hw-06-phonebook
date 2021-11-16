import { ADD, DEL, FILTER, PUT } from "./contactsConstants";
export const addContact = (contact) => ({
  type: ADD,
  payload: contact,
});

export const addContacts = (contacts) => ({
  type: PUT,
  payload: contacts,
});

export const putFilter = (value) => ({
  type: FILTER,
  payload: value,
});

export const delContact = (id) => ({
  type: DEL,
  payload: id,
});
