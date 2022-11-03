import { useState } from "react";
import styles from './styles/form.module.css';

const SearchForm = (props) => {
    const {onSubmit, clearPage} = props;
    const [searchFieldValue, setSearchFieldValue] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        onSubmit(searchFieldValue.trim())   // trim отсекает у строки пробелы до и после написанного текста
        e.target.reset();
    }

    const handleChange = (e) => {
        const {value} = e.target;
        setSearchFieldValue(value);
    }

    return (
        <form className={styles.findVideo} onSubmit={submitForm}>
            <input
            type='text'
            name='textarea'
            placeholder='Что будем искать?'
            className={styles.searchField}
            autoComplete='off'   // форма не запоминает введенные данные
            onChange={handleChange}
            />
            <button className={styles.searchBtn}>Search</button>
            <button onClick={() => clearPage()} className={styles.searchBtn}>Clear</button>
        </form>
    )
}
export default SearchForm;