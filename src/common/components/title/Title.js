import React from "react";
import s from './Title.module.scss'


function Title(props) {
    return (
        <div className={s.title}>
            <h2>{props.text}</h2>
            <span>{props.description}</span>
        </div>
    )
}

export default Title