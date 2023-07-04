import { getContacts } from 'api';
 import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await getContacts();
    return contacts;
  }
);

// *************************************************************

// Без AsyncThunk

// import * as contactsActions from './contactsActions';
// import { getContacts } from 'api';

// export const fetchContacts = () => async dispatch => {
//   dispatch(contactsActions.fetchContactsRequest());

//   try {
//     const contacts = await getContacts();
//     dispatch(contactsActions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError(error));
//   }
// };
