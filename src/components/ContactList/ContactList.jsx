import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ name, number, id }) => (
        <li className={css.item} key={id}>
          <Contact name={name} number={number} id={id} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
