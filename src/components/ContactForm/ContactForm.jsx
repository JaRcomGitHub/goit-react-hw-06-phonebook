import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, getContacts } from "redux/phonebookSlice";
import css from './ContactForm.module.css'

export default function ContactForm() {
    const [name, setName] = useState('');//'Name Names'
    const [number, setNumber] = useState('');//'123-456-789'
    const contacts = useSelector(getContacts);
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

    const handleSubmit = event => {
        event.preventDefault();

        if (checkContact(name)) {
            onAlert(name);
            return;
        }
        
        dispatch(addContact({ name, number }));
        reset();
    }

    const reset = () => {
        setName('');
        setNumber('');
    }
        
    const handleInputChangeName = event => {
        setName(event.currentTarget.value);
    }

    const handleInputChangeNumber = event => {
        setNumber(event.currentTarget.value);
    }

    return (
        <form className={css.сontactForm} onSubmit={handleSubmit}>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleInputChangeName}
                />
            </label>
            <label>
                Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleInputChangeNumber}
                />
            </label>
            <button type='submit'>Add contact</button>
        </form>
    );
}
