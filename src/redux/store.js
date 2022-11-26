import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { phonebookSlice } from "./phonebookSlice";

const persistConfig = {
    key: 'root',
    storage,
}

const phonebookReducer = persistReducer(persistConfig, phonebookSlice.reducer);

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE,
          PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);


// import initialContacts from '../components/contacts.json'
// export const addContact = createAction("phonebook/addContact");
// export const delContact = createAction("phonebook/delContact");
// const contactsReducer = createReducer
//   (initialContacts, {
//     [addContact]: (state, action) => [...state, { id: nanoid(), ...action.payload }],
//     [delContact]: (state, action) => state.filter(contact => contact.id !== action.payload),
//   });
// export const setFilter = createAction("phonebook/setFilter");
// const filterReducer = createReducer
//   ("", {
//     [setFilter]: (state, action) => action.payload,
//   });
// export const getFilter = store => store.filter;