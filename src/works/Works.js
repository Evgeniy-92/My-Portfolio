import React from "react";
import s from './Works.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Work from "./work/Work";



function Works() {
    return (
        <div className={s.worksBlock}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <h2 className={s.title}>Works</h2>
                <div className={s.works}>
                    <Work projectTitle={'Название проекта 1'} description={'Краткое описание 1'}/>
                    <Work projectTitle={'Название проекта 2'} description={'Краткое описание 2'}/>
                </div>
            </div>
        </div>
    )
}

export default Works