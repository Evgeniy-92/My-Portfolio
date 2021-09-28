import React from "react";
import s from './Work.module.css'

function Work(props) {
    return (
        <div className={s.workBlock}>
            <div className={s.imageWork}>
                <button className={s.workButton}>Смотреть</button>
            </div>
            <div className={s.descriptionBlock}>
                <h3>{props.projectTitle}</h3>
                <span>{props.description}</span>
            </div>
        </div>
    )
}

export default Work