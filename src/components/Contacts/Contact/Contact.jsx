import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem, ContactContainer } from './Contact.styled';
import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactSlice';

const Contact = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  return contacts.map(({ id, name, number }) => (
    <ContactContainer key={id}>
      <ContactItem>
        {name} : {number}
      </ContactItem>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </ContactContainer>
  ));
};

Contact.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape),
  deleteContact: PropTypes.func,
};

export default Contact;
