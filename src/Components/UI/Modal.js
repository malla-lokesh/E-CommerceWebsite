import ReactDOM from "react-dom";
import './Modal.css';

const Modal = (props) => {
    if(!props.showCart) {
        return null;
    }

    return (
        ReactDOM.createPortal(
            <div className='modal-overlay'>
                <div className='modal'>
                    <div className='modal-content'>
                        {props.children}
                    </div>
                </div>
            </div>,
            document.getElementById('overlay')
        )
    )
};

export default Modal;