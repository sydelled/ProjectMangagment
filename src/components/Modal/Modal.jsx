import { createPortal } from 'react-dom';
import { forwardRef, useImperativeHandle, useRef} from 'react';

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) { 
    
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return{
            open() {
                dialog.current.showModal();
            }
        };
    });
    
    
    return createPortal(
        <dialog ref={dialog}>
            {children}
            {/* method="dialog will close the modal */}
            <form method="dialog">
                <button>{buttonCaption}</button>
            </form>
        </dialog>, document.getElementById('modal-root')
    )
});

export default Modal