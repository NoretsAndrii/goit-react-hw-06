import { useId } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox({ value, onInput }) {
  const searchNameFieldId = useId();
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
        value={value}
        onChange={event => {
          onInput(event.target.value);
        }}
      />
    </div>
  );
}
