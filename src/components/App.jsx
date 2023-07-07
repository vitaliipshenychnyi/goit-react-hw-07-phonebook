import { ContactForm } from './contactForm/ContactForm';
import { ContactsList } from './contactList/ContactList';
import { Container } from './App.styled';
import { Filter } from './filter/Filter';
import {
  selectContacts,
  selectLoading,
  selectError,
} from 'redux/selectors/selectors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();

  // отримання переліку контактів із state для умови відображення компонента ContactList
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts:</h2>
      <Filter />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {contacts.length !== 0 && <ContactsList />}
    </Container>
  );
};
