import React from "react";
import s from './Contacts.module.css'
import styleContainer from './../common/styles/Container.module.css'


function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>

                <form className={s.form} method="POST" target="_blank" id="data">
                    <input className={s.itemForm} placeholder={'input'} required/>
                    <input className={s.itemForm} placeholder={'input'} required/>
                    <textarea className={s.itemForm} placeholder={'textarea'} required ></textarea>
                </form>
                <button className={s.sendBtn} form="data" type="submit">send</button>

            </div>
        </div>
    )
}

export default Contacts