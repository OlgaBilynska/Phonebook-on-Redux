import React from 'react';
// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addContact } from 'redux/contactSlice';
// import Notiflix from 'notiflix';
import ContactForm from '../ContactForm/ContactForm';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  PhonebookTitle,
  ContactTitle,
  ContactTotal,
} from './App.styled';
import { setFilterValue } from 'redux/filterSlice';
import { getContacts } from 'redux/selectors';

export function App() {
  const contacts = useSelector(getContacts);
  console.log('🚀 ~ file: App.jsx:22 ~ App ~ contacts:', contacts);
  // const dispatch = useDispatch();
  // const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ]
  // );

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const deleteContact = contactId => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== contactId)
  //   );
  // };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getVisibleContacts = e => {
  //   console.log('e.currentTarget.value :>> ', e.currentTarget.value);
  //   dispatch(setFilterValue(e.currentTarget.value));
  //   // const normalizedFilter = filter.toLowerCase();

  //   // return contacts.filter(contact =>
  //   //   contact.name.toLowerCase().includes(normalizedFilter)
  //   // );
  // };

  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />

      <Contacts />
      <ContactTotal>Number of contacts: {contacts.length}</ContactTotal>
    </Container>
  );
}
