import s from './Search.module.css';
import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

class Searchbar extends Component {
    state = {
        searchQuery: '',
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.searchQuery.trim() === '') {
            return toast('Enter a name for the picture!');
        }

        this.props.onSubmit(this.state.searchQuery);
        this.setState({ searchQuery: '' });
    };

    handleNameChange = e => {
        this.setState({ searchQuery: e.target.value.toLowerCase() });
    };

    render() {
        const { handleSubmit, handleNameChange } = this;
        const { searchQuery } = this.state;

        return (
            <>
                <header className={s.Searchbar}>
                    <form className={s.SearchForm} onSubmit={handleSubmit}>
                        <button type="submit" className={s.SearchFormBtn}>
                            <span className={s.SearchFormBtnLabel}>Search</span>
                        </button>

                        <input
                            className={s.SearchFormInput}
                            name="searchQuery"
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            value={searchQuery}
                            onChange={handleNameChange}
                        />
                    </form>
                </header>
            </>
        );
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
