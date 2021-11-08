import React from "react";
import s from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Title from "../common/components/title/Title";
import avatarMain from './../assets/images/profile-avatar.jpg'

function Main() {
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
                                I am a result-oriented developer with experience in creating Landing Pages and SPA using React(JS/TS), Redux, HTML & CSS.
                                I am now improving my skills in this area and expanding them with new technologies.
                                My free time is dedicated to solving the Codewars problem.
                                I consider project proposals/full-time in creative company with current tasks and friendly team!
                            </p>
                            <div className={s.contentInfo}>
                                <div className={`${s.item} ${s.infoName}`}>
                                    <span>Name:</span>
                                    <p>Evgeniy Drozd</p>
                                </div>
                                <div className={`${s.item} ${s.infoEmail}`}>
                                    <span>Email:</span>
                                    <p>
                                        <a href="#">ev.drozd.2020@gmail.com</a>
                                    </p>
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
                            <a href="#" className={s.contentBtn}>Donload CV</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Main;