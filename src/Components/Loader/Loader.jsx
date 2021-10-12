import s from './Loader.module.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Component } from 'react';

class LoaderSpinner extends Component {
    render() {
        return (
            <div className={s.LoaderContainer}>
                <Loader
                    type="Circles"
                    color="#00BFFF"
                    height={80}
                    width={80}
                    timeout={5000} //3 secs
                />
            </div>
        );
    }
}

export default LoaderSpinner;

// export default function LoaderBtn() {
//     return (
//         <>
//         <button type='button' className={s.Button}></button>
//         </>
//     )
// }
