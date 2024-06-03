import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter, setFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = filter => dispatch(setFilter(filter));

  return (
    <div className={css.searchBox_container}>
      <h2 className={css.searchBox_title}>Find contacts by name</h2>
      <input
        className={css.searchBox_input}
        type="text"
        value={filter}
        onChange={e => handleFilterChange(e.target.value)}
      />
    </div>
  );
}