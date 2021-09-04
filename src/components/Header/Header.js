import React from "react"
import {Link} from "wouter"
import useUser from "../../hook/useUser"
import './Header.css'

export default function Header () {
    const {isLogged, logout} = useUser()

    const handleClick = e => {
        e.preventDefault()
        logout()
    }

    return (
        <header className='lg-header'>
            { isLogged ? 
            <Link href="#" onClick={handleClick}>
                Logout
            </Link>
            :
            <>
                <Link to='/login'>
                    Login
                </Link>
                <Link to='/register'>
                    Register
                </Link>
            </>
            }
        </header>
    )
}