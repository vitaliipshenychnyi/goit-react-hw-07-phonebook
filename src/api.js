import axios from 'axios';

const BASE_URL = 'https://64a3e265c3b509573b56b3e7.mockapi.io';

export const getContacts = async () => {
  const response = await axios.get(`${BASE_URL}/contacts`);
  return response.data;
};

export const postContact = async newContact => {
  await axios.post(`${BASE_URL}/contacts`, newContact);
};

export const delContact = async contactId => {
  await axios.delete(`${BASE_URL}/contacts/${contactId}`);
};
