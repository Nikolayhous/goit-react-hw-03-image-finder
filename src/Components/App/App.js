import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PureComponent } from 'react';
import { searchPicturesAPI } from '../../Services/searchPicturesAPI';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import LoaderSpinner from '../Loader';
import Button from '../Button';
import Modal from '../Modal';
searchPicturesAPI();
class App extends PureComponent {
    state = {
        showModal: false,
        pixaBayName: '',
    };

    handleFormSubmit = pixaBayName => {
        this.setState({ pixaBayName });
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };
    render() {
        const { showModal } = this.state;
        const { toggleModal, handleFormSubmit } = this;
        return (
            <>
                <ToastContainer autoClose={3000} />
                <Searchbar onSubmit={handleFormSubmit} />
                <ImageGallery onModal={toggleModal} />
                <LoaderSpinner />
                <Button />
                <button onClick={toggleModal}>Open-modal</button>
                {showModal && <Modal onModal={toggleModal} />}
            </>
        );
    }
}

export default App;
