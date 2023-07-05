import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts } from 'api';

// contacts/fetchContacts
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

const contactsInitialState = { items: [], isLoading: false, error: null };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
      state.error = '';
    },
    [fetchContacts.error]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },

  // reducers: {
  //   add(state, action) {
  //     const doubleContact =
  //       state.findIndex(contact => contact.name === action.payload.name) === -1;

  //     if (doubleContact) {
  //       state.push(action.payload); // додавання нового контакту
  //       window.localStorage.setItem('contacts', JSON.stringify(state));
  //     } else {
  //       alert(`${action.payload.name} is already in contacts.`);
  //     }
  //   },
  //   remove(state, action) {
  //     // визначення індексу контакту у переліку контактів
  //     const idxContact = state.findIndex(
  //       contact => contact.id === action.payload
  //     );
  //     state.splice(idxContact, 1); // видалення контакту по id
  //     window.localStorage.setItem('contacts', JSON.stringify(state));
  //   },
  // },
});

export const { add, remove } = contactsSlice.actions;
