import React from "react";
import s from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Title from "../common/components/title/Title";
import { useFormik } from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {sendForm} from "../appReducer";




function Contacts() {
    const dispatch = useDispatch()
    const isSent = useSelector(state => state.app.isSent)
    const isDisabled = useSelector(state => state.app.isDisabled)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: (values) => {
            const errors = {};
            if (!values.name) {
                errors.name = 'Required';
            } else if (values.name.length > 30) {
                errors.name = 'Must be 30 characters or less';
            }

            if (!values.message) {
                errors.message = 'Required';
            }

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            return errors;
        },
        onSubmit: values => {
            dispatch(sendForm(values.name, values.email, values.message))
            formik.resetForm()
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
                        {formik.errors.name ? <div className={`${s.errorName} ${s.error}`}>{formik.errors.name}</div> : null}

                        <input
                            className={`${s.itemForm} ${s.contactsEmail}`}
                            type='email'
                            placeholder='Email'
                            {...formik.getFieldProps('email')}
                        />
                        {formik.errors.email ? <div className={`${s.errorEmail} ${s.error}`}>{formik.errors.email}</div> : null}

                        <textarea
                            className={`${s.itemForm} ${s.contactsMessage}`}
                            placeholder='Message'
                            {...formik.getFieldProps('message')}
                        />
                        {formik.errors.message ? <div className={`${s.errorMessage} ${s.error}`}>{formik.errors.message}</div> : null}
                        <button disabled={isDisabled} className={s.sendBtn} type="submit">Send message</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contacts