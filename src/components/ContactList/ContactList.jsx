import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filters.name);

  const searchByName = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul className={css.list}>
      {searchByName.map(({ name, number, id }) => (
        <li className={css.item} key={id}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
}
