import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import { ReactComponent as AddIcon } from '../../Icon/add_close.svg';
import s from './Modal.module.css';

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onModal();
        }
    };

    handBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onModal();
        }
    };

    render() {
        return createPortal(
            <div className={s.Overlay} onClick={this.handBackdropClick}>
                <div className={s.Modal}>
                    {this.props.children}
                    <IconButton
                        onClick={this.props.onModal}
                        aria-label="close modal"
                    >
                        <AddIcon width="35" height="35" />
                    </IconButton>
                </div>
            </div>,
            document.getElementById('modalRoot'),
        );
    }
}

Modal.propTypes = {
    onModal: PropTypes.func.isRequired,
    children: PropTypes.node,
};

export default Modal;
