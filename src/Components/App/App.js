import { PureComponent } from 'react';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import LoaderSpinner from '../Loader';
import Button from '../Button';
import Modal from '../Modal';

class App extends PureComponent {
    state = {
        showModal: false,
    };

    handleSubmit = e => {
        e.preventDefault();
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };
    render() {
        const { showModal } = this.state;
        const { handleSubmit, toggleModal } = this;
        return (
            <>
                <Searchbar onSubmit={handleSubmit} />
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
