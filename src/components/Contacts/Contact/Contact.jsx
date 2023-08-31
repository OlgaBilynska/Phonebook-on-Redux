import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem, ContactContainer } from './Contact.styled';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';

const Contact = ({ list, deleteContact }) => {
  const dispatch = useDispatch();

  return list.map(({ id, name, number }) => (
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
