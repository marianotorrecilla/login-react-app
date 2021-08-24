import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import register from '../../services/register'
import './Register.css'

const validateInputs = values => {
    const errors = {}

    if(!values.username){
        errors.username = 'Required username'
    }else if (values.username.length < 2) {
        errors.username = "Length must be greater than 2"
    } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]{2,}$/i.test(values.username)) {
        errors.username = "Invalid username"
    }

    if(!values.password){
        errors.password = 'Required password'
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,20}$/i.test(values.password)) {
        errors.password = "Must be a password between 4 and 20 characters"
    }

    return errors
}

const initialValues = {
    username: '',
    password: ''
}


export default function Register () {
    const [registered, setRegistered] = useState(false)

    if(registered) {
        return (
            <div className="form-back">
                <h4 className="title">Congratulations! You've been successfully registered!</h4>
            </div>
            
        )
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validate={validateInputs}
                onSubmit={(values, {setFieldError} ) => {
                    return register(values)
                    .then(() => {
                        setRegistered(true)
                    })
                    .catch(() => {
                        setFieldError('username', 'Username is not valid')
                    })
                }}
            >
                {
                    ({errors, isSubmitting}) =>
                    <Form className="form-back">
                        <Field 
                            name="username" 
                            placeholder="write here the username"
                            className={errors.username ? 'error' : 'input-form'}
                        />
                        <ErrorMessage className="form-errors" name="username" component="span" />
                        
                        
                        <Field
                            type="password" 
                            name="password"
                            placeholder="write here the password"
                            className={errors.password ? 'error' : 'input-form'}
                        />
                        <ErrorMessage className="form-errors" name="password" component="span" />

                        <button disabled={isSubmitting} className="register-button">
                            Sign Up
                        </button>
                    </Form>
                }
            </Formik>
        </>
    )
}