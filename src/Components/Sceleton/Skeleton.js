import errorImages from '../../images/error.jpg';
import s from './Skeleton.module.css';

export default function Skeleton() {
    return (
        <div role="alert">
            <img
                src={errorImages}
                width="500"
                alt="photo_error"
                className={s.image}
            />
            <p className={s.text}>Sorry, no results were found!</p>
        </div>
    );
}
