import React from 'react';
import s from './modal.module.scss'
import {setOpenModal} from "../../../appReducer";
import {useDispatch} from "react-redux";



const Modal = (props) => {
    const dispatch = useDispatch()
    
    const targetContainerExit = (e) => {
        if (e.target.closest('#modal') !== null) return
        dispatch(setOpenModal(false))
    }
    const text =
        props.typeModal === 'ok' && 'Спасибо что написали мне, как будет время я вам отвечу' ||
        props.typeModal === 'error' && 'Ошибка. Попробуйте ещё раз'

    return (
        <div className={s.box} onClick={targetContainerExit}>
                <div className={s.modal} id='modal'>
                    <div>
                        <p className={s.p}>
                            {text}
                        </p>
                    </div>


                    <div className={s.btnBox}>
                        <button className={s.btn} onClick={() => {
                            dispatch(setOpenModal(false))
                        }}>
                            Exit
                        </button>
                    </div>
                </div>
        </div>
    );
}

export default Modal
