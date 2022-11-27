import { useDispatch, useSelector } from 'react-redux';
import { delContact, getContacts, getFilter } from 'redux/phonebookSlice';
import Contact from "./Contact";
import css from './ContactList.module.css'

export default function ContactList() {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const deleteContact = (contactId) => {
        dispatch(delContact(contactId));
    };
    
    const getFilteredContacts = (name) => {
        const normolizedFilter = name.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normolizedFilter)
        );
    }

    const filteredContacts = getFilteredContacts(filter);

    return filteredContacts.length > 0 && (
        <div className={css.contactListBlock}>
            <ul>
                {filteredContacts.map(({ id, name, number }) => (
                    <Contact
                        key={id}
                        name={name}
                        number={number}
                        onDeleteContact={() => deleteContact(id)}
                    /> 
                ))}
            </ul>
        </div>
    );
}
