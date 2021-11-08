import React from 'react';
import s from './Hire.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import hireBG from '../assets/images/hire.jpg'
import {Link} from "react-scroll";

function Hire() {
    let hire = {
        backgroundImage: `url(${hireBG})`
    }
    return (
        <div style={hire} className={s.hireBlock}>
            <div className={`${styleContainer.container} ${s.containerHire}`}>
                <div className={s.content}>
                    <h2 className={s.hireTitle}>Let's work together!</h2>
                    <span className={s.hireDescription}>I am available for freelance projects. Hire me and get your project done.</span>
                </div>
                <div className={s.buttonBlock}>
                    <Link className={s.button} to={'contacts'} duration={500} smooth={true}
                    >Hire me</Link>
                </div>
            </div>
        </div>
    )
}

export default Hire