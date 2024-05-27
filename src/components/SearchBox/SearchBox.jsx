import { useId } from 'react';
import { useSelector } from 'react-redux';

import css from './SearchBox.module.css';

// Імпортуємо хук
import { useDispatch } from 'react-redux';
// Імпортуємо генератор екшену
import { setFilter } from '../../redux/actions';

export default function SearchBox() {
  const filter = useSelector(state => state.filters.name);
  const searchNameFieldId = useId();
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value.trim()));
  };

  return (
    <div className={css.searchBox}>
      <label className={css.label} htmlFor={searchNameFieldId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        name="searchName"
        id={searchNameFieldId}
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}
