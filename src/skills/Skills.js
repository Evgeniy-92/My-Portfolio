import React from "react";
import s from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet.'}/>
                    <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill title={'React'} description={'dolor sit amet, consectetur adipisicing'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;