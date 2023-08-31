import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact/Contact';
import { ContactList } from './Contacts.styled';

const Contacts = () => {
  return (
    <div>
      <ContactList>
        <Contact />
      </ContactList>
    </div>
  );
};

Contacts.propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.shape),
  onDeleteContact: PropTypes.func,
};

export default Contacts;
