import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOperations';

const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.error]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.error]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
});

export default combineReducers({ entities, isLoading, error });

// *************************************************************

// Без AsyncThunk

// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import * as contactsActions from './contactsActions';

// const entities = createReducer([], {
//   [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
// });

// const isLoading = createReducer(false, {
//   [contactsActions.fetchContactsRequest]: () => true,
//   [contactsActions.fetchContactsSuccess]: () => false,
//   [contactsActions.fetchContactsError]: () => false,
// });

// const error = createReducer(null, {
//   [contactsActions.fetchContactsError]: (_, action) => action.payload,
//   [contactsActions.fetchContactsRequest]: () => null,
// });

// export default combineReducers({ entities, isLoading, error });
