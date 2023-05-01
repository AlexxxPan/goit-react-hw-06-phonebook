import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilteredContacts } from '../../redux/selectors';

function Filter() {
  const dispatch = useDispatch();
  const filterContacts = useSelector(getFilteredContacts);

  return (
    <>
      <p className={styles.name}>Find contacts by name</p>
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={filterContacts}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </>
  );
}

export default Filter;