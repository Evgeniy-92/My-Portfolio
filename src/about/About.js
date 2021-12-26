import React from "react";
import s from './About.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Title from "../common/components/title/Title";
import avatarMain from './../assets/images/profile-avatar.jpg'

function About() {
    return (
        <div className={s.mainBlock} id={'about'}>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <Title text={'About me'} description={'Get to know me'}/>
                <div className={s.aboutBlock}>
                    <div className={s.photo}>
                        <img src={avatarMain} alt=""/>
                    </div>
                    <div className={s.content}>
                        <h3 className={s.contentSubtitle}>Who am i?</h3>
                        <h2 className={s.contentTitle}>I'm Evgeniy Drozd, a Front-end developer (React + Redux)</h2>
                        <div className={s.contentDescription}>
                            <p>
                                I’m a frontend developer who has a results-focused attitude tocreating SPA,using React(JS/TS), Redux.
                                My free time is dedicated to Codewars, improve my English,programming tutorials. Ready to consider project work and full-time employment.
                            </p>
                            <div className={s.contentInfo}>
                                <div className={`${s.item} ${s.infoName}`}>
                                    <span>Name:</span>
                                    <p>Evgeniy Drozd</p>
                                </div>
                                <div className={`${s.item} ${s.infoEmail}`}>
                                    <span>Email:</span>
                                    <p>ev.drozd.2020@gmail.com</p>
                                </div>
                                <div className={`${s.item} ${s.infoAge}`}>
                                    <span>Age:</span>
                                    <p>29</p>
                                </div>
                                <div className={`${s.item} ${s.infoFrom}`}>
                                    <span>From:</span>
                                    <p>Minsk, Belarus</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;