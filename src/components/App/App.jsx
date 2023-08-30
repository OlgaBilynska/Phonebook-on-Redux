import React from 'react';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import ContactForm from '../ContactForm/ContactForm';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';

import {
  Container,
  PhonebookTitle,
  ContactTitle,
  ContactTotal,
} from './App.styled';

export function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );

  const formSubmitHandler = data => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${data.name} is already in contacts.`);
    } else {
      setContacts(prevContacts => [data, ...prevContacts]);
    }
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm onSubmit={formSubmitHandler} />
      <ContactTitle>Contacts</ContactTitle>
      <Filter value={filter} onChange={changeFilter} />

      <Contacts
        contactList={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
      <ContactTotal>Number of contacts: {contacts.length}</ContactTotal>
    </Container>
  );
}
