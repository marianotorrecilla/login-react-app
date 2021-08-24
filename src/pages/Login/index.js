import React, { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import useUser from '../../hook/useUser'
import './Login.css'

export default function Login () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [, navigate] = useLocation()
    const {login, isLogged} = useUser()

    useEffect(() => {
        if (isLogged) navigate('/')
    }, [isLogged, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        login()
    }

    return (
        <form onSubmit={handleSubmit} className="form-back" >
            <input 
                placeholder='username' 
                onChange={e => setUsername(e.target.value)} 
                value={username}
                className="input-form"
            />
            <input 
                type="password" 
                placeholder='password' 
                onChange={e => setPassword(e.target.value)}
                value={password}
                className="input-form"
            />
            <button type="submit" className="login-button">Login</button>
        </form>
    )
}