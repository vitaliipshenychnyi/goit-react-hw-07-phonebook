import { ListOfContact, ContactItem } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import {
  selectFilterValue,
  selectContacts,
  selectLoading,
} from 'redux/selectors/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();

  // отримання значення тексту із state.filter для пошуку збігу у іменах контактів
  const contactSearch = useSelector(selectFilterValue);

  // отримання переліку контактів
  const contacts = useSelector(selectContacts);

  // створення нового списку контактів із тих контактів, імена яких включають текст із state.filter
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactSearch.toLowerCase())
  );

  const loading = useSelector(selectLoading);

  return (
    <ListOfContact>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name}: {contact.phone}
          {!loading && (
            <button
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          )}
          {loading && <button type="button">Delete</button>}
        </ContactItem>
      ))}
    </ListOfContact>
  );
};
