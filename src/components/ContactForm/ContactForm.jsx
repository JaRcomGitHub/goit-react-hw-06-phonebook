import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/actions";
import css from './ContactForm.module.css'

export default function ContactForm() {
    const [name, setName] = useState('');//'Name Names'
    const [number, setNumber] = useState('');//'123-456-789'
    const dispatch = useDispatch();

    const handleInputChangeName = event => {
        setName(event.currentTarget.value);
    }

    const handleInputChangeNumber = event => {
        setNumber(event.currentTarget.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (1) {//добавить проверку, если уже есть
            dispatch(addNote({name, number}));
            reset();
        }
    };

    const reset = () => {
        setName('');
        setNumber('');
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
