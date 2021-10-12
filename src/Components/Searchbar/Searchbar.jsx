import PropTypes from 'prop-types';
import s from './Search.module.css';
import { Component } from 'react';

class Searchbar extends Component {
    render() {
        const { onSubmit } = this.props;

        return (
            <>
                <header className={s.Searchbar}>
                    <form className={s.SearchForm} onSubmit={onSubmit}>
                        <button type="submit" className={s.SearchFormBtn}>
                            <span className={s.SearchFormBtnLabel}>Search</span>
                        </button>

                        <input
                            className={s.SearchFormInput}
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                        />
                    </form>
                </header>
            </>
        );
    }
}

Searchbar.ropTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
