import React from 'react';
import './scss/modal.scss'

const Modal = (props) => {
    const {visible, setVisible, className, children, ...someProps} =props
    const rootClasses = ['rs-modal-container']

    if(visible){
        rootClasses.push('active')
    }
    return (
        <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)} {...someProps}>
            <div className={'rs-modal-content '+ className} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;