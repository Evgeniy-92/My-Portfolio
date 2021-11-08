import React from "react";
import s from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Title from "../common/components/title/Title";


function Contacts() {
    return (
        <div className={s.contactsBlock} id={'contacts'}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contacts'} description={'Feel free to contact me anytime'}/>
                <div className={s.formContainer}>
                    <form className={s.form} method="POST" target="_blank" id="data">
                        <input className={`${s.itemForm} ${s.contactsName}`} placeholder={'Name'} required/>
                        <input className={`${s.itemForm} ${s.contactsEmail}`} placeholder={'Email'} required/>
                        <input className={`${s.itemForm} ${s.contactsSubject}`} placeholder={'Subject'} required/>
                        <textarea className={`${s.itemForm} ${s.contactsMessage}`} placeholder={'Message'} required ></textarea>
                        <button className={s.sendBtn} form="data" type="submit">Send message</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contacts