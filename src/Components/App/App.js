import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import fetchPixaBayAPI from '../../Services/searchPicturesAPI';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import LoaderSpinner from '../Loader';
import Button from '../Button';
import Modal from '../Modal';
import Skeleton from '../Sceleton';
import scrollPageDown from '../../scroll/scrolTo';

class App extends Component {
    state = {
        page: 1,
        searchQuery: '',
        showModal: false,
        loadingSpinner: false,
        pixaBayImages: [],
        largeImage: {},
    };

    componentDidUpdate(prevProps, prevState) {
        const { searchQuery } = this.state;
        if (searchQuery !== prevState.searchQuery) {
            this.fetchPixaBay()
                .catch(error => console.log(error))
                .finally(() => this.setState({ loadingSpinner: false }));
        }
    }

    fetchPixaBay = () => {
        const { searchQuery, page } = this.state;
        this.setState({ loadingSpinner: true });
        return fetchPixaBayAPI(searchQuery, page).then(pixaBayImages => {
            this.setState(prevState => ({
                pixaBayImages: [...prevState.pixaBayImages, ...pixaBayImages],
                page: prevState.page + 1,
            }));
        });
    };

    handleLoadMoreClick = () => {
        this.setState({ loadingSpinner: true });
        this.fetchPixaBay()
            .then(() => {
                scrollPageDown();
            })
            .catch(error => console.log(error))
            .finally(() => this.setState({ loadingSpinner: false }));
    };

    handleFormSubmit = searchQuery => {
        this.setState({
            searchQuery,
            page: 1,
            pixaBayImages: [],
        });
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    ClickImages = largeImage => {
        this.setState({ largeImage });
        this.toggleModal();
    };

    render() {
        const {
            showModal,
            searchQuery,
            pixaBayImages,
            loadingSpinner,
            largeImage,
        } = this.state;

        const {
            toggleModal,
            handleFormSubmit,
            ClickImages,
            handleLoadMoreClick,
        } = this;
        return (
            <>
                <ToastContainer />
                <Searchbar onSubmit={handleFormSubmit} />

                {pixaBayImages.length !== 0 ? (
                    <ImageGallery
                        onModal={ClickImages}
                        pixaBayImages={pixaBayImages}
                    />
                ) : (
                    searchQuery !== '' && <Skeleton />
                )}

                {loadingSpinner && <LoaderSpinner />}

                {pixaBayImages.length !== 0 && (
                    <Button onClick={handleLoadMoreClick} />
                )}

                {showModal && (
                    <Modal onModal={toggleModal}>
                        {loadingSpinner && <LoaderSpinner />}
                        <img
                            src={largeImage.largeImageURL}
                            alt={largeImage.tags}
                        />
                    </Modal>
                )}
            </>
        );
    }
}

export default App;
