import PropTypes from 'prop-types';
import s from './Search.module.css';
import { Component } from 'react';

class Searchbar extends Component {
    render() {
        return (
            <>
                <header className={s.Searchbar}>
                    <form className={s.SearchForm}>
                        <button type="submit" className={s.SearchFormBtn}>
                            <span className={s.SearchFormBtnLabel}>Search</span>
                        </button>

                        <input
                            className={s.SearchFormInput}
                            type="text"
                            autocomplete="off"
                            autofocus
                            placeholder="Search images and photos"
                        />
                    </form>
                </header>
            </>
        );
    }
}

export default Searchbar;
