import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';

export default function Contact({ name, number, id, onDelete }) {
  return (
    <>
      <div className={css.contactBox}>
        <p>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
}
