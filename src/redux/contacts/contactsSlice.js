import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    add(state, action) {
      const doubleContact =
        state.items.findIndex(contact => contact.name === action.payload.name) === -1;

      if (doubleContact) {
        state.items.push(action.payload); // додавання нового контакту
      } else {
        alert(`${action.payload.name} is already in contacts.`);
      }
    },
    remove(state, action) {
      // визначення індексу контакту у переліку контактів
      const idxContact = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(idxContact, 1); // видалення контакту по id
    },
  },
});

export const { add, remove } = contactsSlice.actions;

// ********************************************************

// КОД З ВИКОРИСТАННЯМ localStorage

// import { createSlice } from '@reduxjs/toolkit';

// // зчитування даних зі сховища, або []
// const contactsInitialState =
//   JSON.parse(window.localStorage.getItem('contacts')) || [];

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     add(state, action) {
//       const doubleContact =
//         state.findIndex(contact => contact.name === action.payload.name) === -1;

//       if (doubleContact) {
//         state.push(action.payload); // додавання нового контакту
//         window.localStorage.setItem('contacts', JSON.stringify(state));
//       } else {
//         alert(`${action.payload.name} is already in contacts.`);
//       }
//     },
//     remove(state, action) {
//       // визначення індексу контакту у переліку контактів
//       const idxContact = state.findIndex(
//         contact => contact.id === action.payload
//       );
//       state.splice(idxContact, 1); // видалення контакту по id
//       window.localStorage.setItem('contacts', JSON.stringify(state));
//     },
//   },
// });

// export const { add, remove } = contactsSlice.actions;
