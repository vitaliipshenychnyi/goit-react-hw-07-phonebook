import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter/filterSlice';
// import { contactsSlice } from './contacts/contactsSlice';

import contactsReducer from './contacts/contactsReducer';

// export const store = configureStore({
//   reducer: {
//     contacts: { items: [], isLoading: false, error: null },
//     filter: filterSlice.reducer,
//   },
// });

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice.reducer
  },
});

// import { configureStore } from '@reduxjs/toolkit';
// import { contactsSlice } from './contacts/contactsSlice';
// import { filterSlice } from './filter/filterSlice';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = { key: 'contacts', storage };

// const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// export const store = configureStore({
//   reducer: {
//     contacts: persistedContactsReducer,
//     filter: filterSlice.reducer,
//   },
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
// });

// export const persistor = persistStore(store);
