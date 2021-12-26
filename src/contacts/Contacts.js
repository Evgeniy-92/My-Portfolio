import React from "react";
import s from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Title from "../common/components/title/Title";
import { useFormik } from 'formik';


function Contacts() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className={s.contactsBlock} id={'contacts'}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contacts'} description={'Feel free to contact me anytime'}/>
                <div className={s.formContainer}>
                    <form onSubmit={formik.handleSubmit} className={s.form}>

                        <input
                            className={`${s.itemForm} ${s.contactsName}`}
                            type='text'
                            placeholder='Name'
                            {...formik.getFieldProps('name')}
                        />

                        <input
                            className={`${s.itemForm} ${s.contactsEmail}`}
                            type='email'
                            placeholder='Email'
                            {...formik.getFieldProps('email')}
                        />

                        <input
                            className={`${s.itemForm} ${s.contactsSubject}`}
                            type='text'
                            placeholder='Subject'
                            {...formik.getFieldProps('subject')}
                        />

                        <textarea
                            className={`${s.itemForm} ${s.contactsMessage}`}
                            placeholder='Message'
                            {...formik.getFieldProps('message')}
                        />
                        <button className={s.sendBtn} type="submit">Send message</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contacts