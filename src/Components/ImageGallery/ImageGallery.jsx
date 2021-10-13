import Container from '../Container';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery({ onModal }) {
    return (
        <section>
            <Container>
                <ul className={s.ImageGallery}>
                    <ImageGalleryItem />
                </ul>
            </Container>
        </section>
    );
}

export default ImageGallery;
