import React from 'react';
import s from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Project from './project/Project';
import Title from '../common/components/title/Title';
import socialImage from '../assets/images/social.jpg'
import todolistImage from '../assets/images/to-do-list.jpg'
import counter from './../assets/images/unnamed.jpg'
import cards from './../assets/images/cards.png'
import travel from './../assets/images/time-to-travel.jpg'



function Projects() {
    return (
        <div className={s.projectsBlock} id={'projects'}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title text={'Projects'} description={'Here are some of my projects'}/>
                <div className={s.projects}>
                    {/*<Project*/}
                    {/*    roadPages={''}*/}
                    {/*    roadCode={''}*/}
                    {/*    src={socialImage}*/}
                    {/*    projectTitle={'Social network'}*/}
                    {/*    description={'My social network is an opportunity to communicate with friends, listen to music, exchange photos and likes, as well as make new acquaintances.'}/>*/}
                    {/*<Project*/}
                    {/*    road={''}*/}
                    {/*    roadCode={''}*/}
                    {/*    src={todolistImage}*/}
                    {/*    projectTitle={'To do list'}*/}
                    {/*    description={'My todo list will help you not to forget about your business.'}/>*/}
                    <Project
                        roadPages={'https://evgeniy-92.github.io/cards-2-0/'}
                        roadCode={'https://github.com/Evgeniy-92/cards-2-0'}
                        src={cards}
                        projectTitle={'Cards'}
                        description={'Study cards.'}/>
                    <Project
                        roadPages={'https://evgeniy-92.github.io/Counter/'}
                        roadCode={'https://github.com/Evgeniy-92/Counter'}
                        src={counter}
                        projectTitle={'Counter'}
                        description={'Just a counter.'}/>
                    <Project
                        roadPages={'https://evgeniy-92.github.io/Traveling/app/'}
                        roadCode={'https://github.com/Evgeniy-92/Traveling'}
                        src={travel}
                        projectTitle={'Traveling'}
                        description={'Travel lending.'}/>
                </div>
            </div>
        </div>
    )
}

export default Projects