import propTypes from 'prop-types';
import styles from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => (
  <div className={styles.wraperContactList}>
    <ul className={styles.list}>
      {contacts.map((contact, id) => (
        <li key={id} className={styles.item}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={styles.button}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};