import { useState, useEffect } from 'react';
import './App.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';

const dataContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const getSavedContacts = () => {
  const savedContacts = localStorage.getItem('savedContacts');
  return savedContacts ? JSON.parse(savedContacts) : dataContacts;
};

function App() {
  const [inputValue, setInputValue] = useState('');
  const [contacts, setContacts] = useState(getSavedContacts);

  const handleDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('savedContacts', JSON.stringify(contacts));
  }, [contacts]);

  const searchByName = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(inputValue.toLowerCase());
  });
  console.log(contacts);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} setContacts={setContacts} />
        <SearchBox value={inputValue} onInput={setInputValue} />
        <ContactList contacts={searchByName} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
