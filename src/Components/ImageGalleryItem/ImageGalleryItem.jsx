import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem() {
    return (
        <>
            <li className="ImageGalleryItem">
                <img src="" alt="" className={s.ImageGalleryItem__image} />
            </li>
        </>
    );
}

export default ImageGalleryItem;
