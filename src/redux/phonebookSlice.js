import { createSlice, nanoid } from "@reduxjs/toolkit";
import initialContacts from '../components/contacts.json'

const initialPhonebook = {
  contacts: initialContacts,
  filter: '',
}

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: initialPhonebook,
  reducers: {
    addContact(state, action) {
      state.contacts.push({ id: nanoid(), ...action.payload });
    },
    delContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, delContact, setFilter } = phonebookSlice.actions;
export const getContacts = store => store.phonebook.contacts;
export const getFilter = store => store.phonebook.filter;
