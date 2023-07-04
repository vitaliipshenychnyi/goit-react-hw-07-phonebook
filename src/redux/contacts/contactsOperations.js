import { getContacts } from 'api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
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
