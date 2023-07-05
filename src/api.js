import axios from 'axios';

const BASE_URL = 'https://64a3e265c3b509573b56b3e7.mockapi.io';

export const getContacts = async () => {
  const response = await axios.get(`${BASE_URL}/contacts`);
  return response.data;
};

export const postContact = async () => {
  const response = await axios.post(`${BASE_URL}/contacts`);
  return response.data;
};

export const deleteContacts = async () => {
  const response = await axios.delete(`${BASE_URL}/contacts/:id`);
  return response.data;
};
