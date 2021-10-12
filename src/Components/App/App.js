import { Component } from 'react';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import LoaderSpinner from '../Loader';
import Button from '../Button';
import Modal from '../Modal';

class App extends Component {
    handleSubmit = e => {
        e.preventDefault();
    };
    render() {
        const { handleSubmit } = this;
        return (
            <>
                <Searchbar onSubmit={handleSubmit} />
                <ImageGallery />
                <LoaderSpinner />
                <Button />
                {/* <Modal /> */}
            </>
        );
    }
}

export default App;
