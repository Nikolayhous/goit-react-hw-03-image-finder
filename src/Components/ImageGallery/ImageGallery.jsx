import PropTypes from 'prop-types';
import Container from '../Container';
import s from './ImageGallery.module.css';

function ImageGallery({ children }) {
    return (
        <section>
            <Container>
                <ul className={s.ImageGallery}></ul>
            </Container>
        </section>
    );
}

export default ImageGallery;
