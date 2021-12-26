import React, {useState} from "react";
import s from './Header.module.scss'
import Nav from "../nav/Nav";

function Header() {
    const [status, setStatus] = useState(false)
    const show = () => {
        setStatus(!status)
    }
    const hide = () => {
        setStatus(false)
    }
    return (
        <div className={s.header}>
            <button onClick={show} onBlur={hide} className={s.headerBtn}>Menu</button>
            <Nav status={status}/>
        </div>
    );
}

export default Header;