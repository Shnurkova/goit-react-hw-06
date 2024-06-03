import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const getVisibleContacts = (contacts, filterName) => {
  return (
    contacts?.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filterName.toLowerCase())
    ) || []
  );
};

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul className={css.contactlist}>
      {visibleContacts.map(contact => {
        return (
          <li key={contact.id} className={css.contactlist_item}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
}