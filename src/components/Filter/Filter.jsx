import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, setFilter } from 'redux/phonebookSlice';
import css from './Filter.module.css'

export default function Filter() {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const changeFilter = event => {
        dispatch(setFilter(event.currentTarget.value));
    };

    return contacts.length > 0 &&  (
        <div className={css.filterBlock}>
            <p>Find contacts by name</p>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={filter}
                onChange={changeFilter}
            />
        </div>
    )
};
