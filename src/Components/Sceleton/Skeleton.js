import errorImages from '../../images/error.jpg';
import s from './Skeleton.module.css';
import PropTypes from 'prop-types';

export default function Skeleton({ message }) {
    return (
        <div role="alert">
            <img
                src={errorImages}
                width="500"
                alt="photo_error"
                className={s.image}
            />
            {message}
        </div>
    );
}

Skeleton.propTypes = {
    message: PropTypes.string.isRequired,
};
