import React from "react";
import s from './Project.module.scss'

function Project(props) {
    return (
        <div className={s.projectBlock}>
            <div className={s.imageContainer}>
                <img src={props.src} alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <h3>{props.projectTitle}</h3>
                <p>{props.description}</p>
                <div className={s.linksView}>
                    <span>Links:</span>
                    <ul className={s.listItem}>
                        <li className={s.item}><a href="#">View demo</a></li>
                        <li className={s.item}><a href="#">View code</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Project