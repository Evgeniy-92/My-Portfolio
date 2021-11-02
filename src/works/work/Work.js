import React from "react";
import s from './Work.module.css'

function Work(props) {
    return (
        <div className={s.workBlock}>
            <div className={s.imageContainer}>
                <a className={s.workButton}>Смотреть</a>
            </div>
            <div className={s.descriptionBlock}>
                <h3>{props.projectTitle}</h3>
                <span>{props.description}</span>
            </div>
        </div>
    )
}

export default Work