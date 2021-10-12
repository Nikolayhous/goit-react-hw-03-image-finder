import PropTypes from 'prop-types';
import { Component } from 'react';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';

class App extends Component {
    render() {
        return (
            <>
                <Searchbar />
                <ImageGallery />
            </>
        );
    }
}

export default App;
