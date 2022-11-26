import { useDispatch, useSelector } from "react-redux";
import { addContact, delContact, setFilter, getContacts, getFilter } from "redux/phonebookSlice";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter"

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onAlert = name =>  {
    window.alert(`${name} is already in contacts.`);
  }
  
  const checkContact = (name) => {
    const normolizedName = name.toLowerCase();

    return contacts.some(contact =>
      contact.name.toLowerCase().includes(normolizedName)
    );
  }
  
  const formSubmitHandler = data => {
    if (checkContact(data.name)) {
      onAlert(data.name);
      return false;
    }
    
    dispatch(addContact(data));
    return true;
  };

  const deleteContact = (contactId) => {
    dispatch(delContact(contactId));
  };

  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  const getFilteredContacts = (name) => {
    const normolizedFilter = name.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizedFilter)
    );
  }

  const filteredContacts = getFilteredContacts(filter);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>
      {contacts.length > 0  &&
        <Filter
          value={filter}
          onChange={changeFilter} />
      }
      {filteredContacts.length > 0 &&
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact} />
      }
    </div>
  );
};
