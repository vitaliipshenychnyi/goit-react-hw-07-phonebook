import { ListOfContact, ContactItem } from './ContactList.styled';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { remove } from 'redux/contacts/contactsSlice';
import { fetchContacts } from 'redux/contacts/contactsSlice';
import { useEffect } from 'react';

export const ContactsList = () => {
  const dispatch = useDispatch();

  // отримання значення тексту із state.filter для пошуку збігу у іменах контактів
  const contactSearch = useSelector(state => state.filter);

  // отримання переліку контактів із state.contacts для відображення
  const contacts = useSelector(state => state.contacts.items);

  // створення нового списку контактів із тих контактів, імена яких включають текст із state.filter
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactSearch.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ListOfContact>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name}: {contact.phone}
          <button type="button" onClick={() => dispatch(remove(contact.id))}>
            Delete
          </button>
        </ContactItem>
      ))}
    </ListOfContact>
  );
};
