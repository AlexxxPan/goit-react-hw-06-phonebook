import { nanoid } from 'nanoid';
import { useState } from 'react';
import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';

const initialState = {
  name: '',
  number: '',
};
const ContactForm = () => {
  const [state, setState] = useState(initialState);

  const contactId = nanoid();
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;

    setState(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const { name, number } = state;
    dispatch(addContact(name, number));
    setState(initialState);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label className={styles.title} htmlFor={contactId}>
         Name
          <input
            onChange={handleChange}
            value={state.name}
            className={styles.input}
            type="text"
            name="name"
            id={contactId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles.title} htmlFor={contactId}>
          Number
          <input
            onChange={handleChange}
            value={state.number}
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;