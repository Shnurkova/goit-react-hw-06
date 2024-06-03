import css from './Contact.module.css';
import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import Button from '../Button/Button';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.contact_container}>
      <div className={css.contact_descr}>
        <p className={css.contact_descr_name}>
          <IoPersonSharp size={16} className={css.contact_descr_icon} />
          {name}
        </p>
        <p className={css.contact_descr_number}>
          <FaPhoneAlt size={16} className={css.contact_descr_icon} />
          {number}
        </p>
      </div>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
}