import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery({ onModal, pixaBayImages }) {
    return (
        <>
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
        </>
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
