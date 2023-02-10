import PropTypes from 'prop-types';

import css from './ContactList.module.css';

const ContactList = ({ removeContact, contacts }) => {
  const items = contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}{' '}
      <button onClick={() => removeContact(id)} type="button">
        Delete
      </button>
    </li>
  ));

  return <ul className={css.contacts}>{items}</ul>;
};

export default ContactList;

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
