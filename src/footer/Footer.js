import React from "react";
import s from './Footer.module.css'
import styleContainer from './../common/styles/Container.module.css';


function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Евгений Дрозд</h2>
                <div className={s.elementsContainer}>
                    <div className={s.element}></div>
                    <div className={s.element}></div>
                    <div className={s.element}></div>
                    <div className={s.element}></div>
                </div>
                <span className={s.copyright}>&#169; Все права защищены</span>

            </div>
        </div>
    )
}

export default Footer