import './App.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';

// const getSavedContacts = () => {
//   const savedContacts = localStorage.getItem('savedContacts');
//   return savedContacts ? JSON.parse(savedContacts) : dataContacts;
// };

function App() {
  // useEffect(() => {
  //   localStorage.setItem('savedContacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
