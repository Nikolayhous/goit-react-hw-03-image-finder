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
        const { page, searchQuery } = this.state;
        this.setState({ loadingSpinner: true });
        return fetchPixaBayAPI(page, searchQuery).then(pixaBayImages => {
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
            pixaBayImages,
            loadingSpinner,
            searchQuery,
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
                <ToastContainer autoClose={3000} />
                <Searchbar onSubmit={handleFormSubmit} />
                {loadingSpinner && <LoaderSpinner />}
                {pixaBayImages.length !== 0 ? (
                    <ImageGallery
                        onModal={ClickImages}
                        pixaBayImages={pixaBayImages}
                    />
                ) : (
                    searchQuery !== '' && (
                        <Skeleton message={'Sorry, no results were found.'} />
                    )
                )}
                {loadingSpinner && !showModal && <LoaderSpinner />}
                {!loadingSpinner && pixaBayImages[0] && (
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
