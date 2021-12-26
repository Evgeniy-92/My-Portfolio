import React from "react";
import s from './Nav.module.scss'
import avatar from '../assets/images/profile-avatar.jpg'
import {Link} from "react-scroll";

function Nav(props) {
    const activeMenu = props.status ? `${s.nav} ${s.active}` : s.nav

    const items = ['about', 'skills', 'hire me', 'projects', 'contacts']
    const element = items.map((item, index) => {
       return <li className={s.item}>
            <Link
                key={index}
                className={s.link}
                activeClass={s.activeLink}
                to={item}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >{item}</Link>
        </li>})
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
                {element}
            </ul>
        </div>
    );
}

export default Nav;