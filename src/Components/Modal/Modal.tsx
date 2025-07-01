import style from './Modal.module.css';

type TChildren = {
    children: React.ReactNode;
    showModal: boolean;
}

const Modal = ({children, showModal}: TChildren) => {
    return (
        <>
            {showModal && (
                <div className={style['modal-container']}>
                    {children}
                </div>
            )}
        </>
    )
}

export default Modal;