import React from "react";
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import {
    faHtml5,
    faCss3Alt,
    faReact,
    faJs,
    faBattleNet,
    faDashcube,
    faWpforms, faAsymmetrik, faGit
} from "@fortawesome/free-brands-svg-icons";
import {faFillDrip, faListAlt} from "@fortawesome/free-solid-svg-icons";

function Skills() {
    return (
        <div className={s.skillsBlock} id={'skills'}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title text={'Skills'} description={'Libraries, programming languages, tools'}/>
                <div className={s.skills}>
                    <Skill title={'React'} icon={faReact} description={'A JavaScript library for building user interfaces.'}/>
                    <Skill title={'Redux'} icon={faBattleNet} description={'A Predictable State Container for JS Apps.'}/>
                    <Skill title={'TypeScript'} icon={faDashcube} description={'TS extends JS by adding types.'}/>
                    <Skill title={'JavaScript'} icon={faJs} description={'JS is a programming language that adds interactivity to your website.'}/>
                    <Skill title={'Axios'} icon={faAsymmetrik} description={'Axios is a promise based HTTP client for the browser and Node.js.'}/>
                    <Skill title={'Unit Test'} icon={faListAlt} description={'Unit test is to feed something to the input of the unit and check the result at the output'}/>
                    <Skill title={'GIT'} icon={faGit} description={'Git is a distributed version control system that allows developers to track changes in files and work on the same project together with colleagues.'}/>
                    <Skill title={'HTML'} icon={faHtml5} description={'HTML is a standardized document markup language for viewing web pages in a browser.'}/>
                    <Skill title={'CSS'} icon={faCss3Alt} description={'CSS is a formal language for describing the appearance of a document written using a markup language.'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;