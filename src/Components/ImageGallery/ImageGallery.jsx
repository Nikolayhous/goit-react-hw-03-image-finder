import Container from '../Container';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery({ onModal, pixaBayImages }) {
    return (
        <section>
            <Container>
                <ul className={s.ImageGallery}>
                    {pixaBayImages.map(image => (
                        <ImageGalleryItem
                            onModal={onModal}
                            key={image.id}
                            tags={image.tags}
                            webformatURL={image.webformatURL}
                            image={image}
                        />
                    ))}
                </ul>
            </Container>
        </section>
    );
}

ImageGallery.propTypes = {
    onModal: PropTypes.func.isRequired,
    pixaBayImages: PropTypes.arrayOf(
        PropTypes.shape({
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ),
};

export default ImageGallery;
