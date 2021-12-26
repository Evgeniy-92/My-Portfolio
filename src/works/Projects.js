import React from 'react';
import s from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Project from './project/Project';
import Title from '../common/components/title/Title';
import socialImage from '../assets/images/social.jpg'
import todolistImage from '../assets/images/to-do-list.jpg'
import counter from './../assets/images/unnamed.jpg'



function Projects() {
    return (
        <div className={s.projectsBlock} id={'projects'}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title text={'Projects'} description={'Here are some of my projects'}/>
                <div className={s.projects}>
                    <Project
                        roadPages={''}
                        roadCode={''}
                        src={socialImage}
                        projectTitle={'Social network'}
                        description={'My social network is an opportunity to communicate with friends, listen to music, exchange photos and likes, as well as make new acquaintances.'}/>
                    <Project
                        road={''}
                        roadCode={''}
                        src={todolistImage}
                        projectTitle={'To do list'}
                        description={'My todo list will help you not to forget about your business.'}/>
                    <Project
                        roadPages={'https://evgeniy-92.github.io/Counter/'}
                        roadCode={'https://github.com/Evgeniy-92/Counter'}
                        src={counter}
                        projectTitle={'Counter'}
                        description={'Just a counter.'}/>
                </div>
            </div>
        </div>
    )
}

export default Projects