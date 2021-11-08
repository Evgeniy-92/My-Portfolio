import React from "react";
import s from './Nav.module.scss'
import avatar from '../assets/images/profile-avatar.jpg'

function Nav2(props) {
    const activeMenu = props.status ? `${s.nav} ${s.active}` : s.nav
    return (
        <div className={activeMenu}>
            <div className={s.navAvatarBlock}>
                <div className={s.avatarContainer}>
                    <img src={avatar} alt=""/>
                </div>
                <h3 className={s.titleName}>Evgeniy Drozd</h3>
                <span className={s.status}>Available for work</span>
            </div>
            <ul className={s.listItem}>
                <li className={s.item}><a href='#'>Home</a></li>
                <li className={s.item}><a href={"#mainBlock"}>About</a></li>
                <li className={s.item}><a href={"#skillsBlock"}>Skills</a></li>
                <li className={s.item}><a href={"#projectsBlock"}>Projects</a></li>
                <li className={s.item}><a href={"#contactsBlock"}>Contacts</a></li>
            </ul>
        </div>
    );
}

export default Nav2;