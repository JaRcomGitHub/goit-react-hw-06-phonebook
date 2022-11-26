import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { clicksReducer } from "./clicksSlice";


export const addNote = createAction("phonebook/addNote");

// const initialState = {
//   contacts: [],
//   filter: "",
// }

const initialState = [];

const myReducer = createReducer
  (initialState, {
    [addNote]: (state, action) => [...state, {...action.payload}],
})



export const store = configureStore({
  reducer: {
    contacts: myReducer,
    delete: clicksReducer,
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