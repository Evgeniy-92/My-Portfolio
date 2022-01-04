import React from "react";
import s from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.scss';
import telegram from '../assets/images/telegram.png'
import linkedIn from '../assets/images/linkedIn.png'
import codewars from '../assets/images/codewars.png'
import gitHub from '../assets/images/github.png'


function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2 className={s.name}>Evgeniy Drozd</h2>
                <div className={s.elementsContainer}>
                    <div className={s.element}>
                        <a href={'https://t.me/evgen_drozd'} target='_blank'>
                            <img src={telegram}/>
                        </a>
                    </div>
                    <div className={s.element}>
                        <a href={'https://www.linkedin.com/in/evgeniy-drozd/'} target='_blank'>
                            <img src={linkedIn}/>
                        </a>
                    </div>
                    <div className={s.element}>
                        <a href={'https://www.codewars.com/users/Evgeniy-2020'} target='_blank'>
                            <img src={codewars}/>
                        </a>
                    </div>
                    <div className={s.element}>
                        <a href={'https://github.com/Evgeniy-92'} target='_blank'>
                            <img src={gitHub}/>
                        </a>
                    </div>
                </div>
                <span className={s.copyright}>&#169; Все права защищены</span>

            </div>
        </div>
    )
}

export default Footer