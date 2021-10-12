import s from './Button.module.css';
import Container from '../Container';

function Button() {
    return (
        <Container>
            <button type="button" className={s.Button}>
                Load more
            </button>
        </Container>
    );
}

export default Button;
