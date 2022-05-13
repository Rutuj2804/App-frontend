import { Button, Checkbox } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../components/logo/Logo'

const Login = () => {

    const [ formData, setFormData ] = useState({
        username: '',
        password: '',
    })

    const { username, password } = formData

    const handleChangeInInput = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        console.log(formData);
    }

    return (
        <div className='auth__Wrapper'>
            <div className='auth__Container'>
                <div className='auth__Titles'>
                    <Logo />
                    <h6>Login To Continue</h6>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <div className='auth__InputDiv'>
                        <input
                            type="email"
                            name="username"
                            value={username}
                            onChange={handleChangeInInput}
                            required
                            autoComplete='false'
                        />
                        <label>Email</label>
                    </div>
                    <div className='auth__InputDiv'>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChangeInInput}
                            required
                            autoComplete='false'
                        />
                        <label>Password</label>
                    </div>
                    {/* <div className='auth__InternalLinks'>
                      <p><Checkbox defaultChecked size="small" /> Remember Me</p>
                    </div> */}
                    <Button type='submit'>Login</Button>
                </form>
                <div className='auth__ExternalLinks'>
                    <p>Don't have an Account ? <NavLink to="/register">Register Now</NavLink></p>
                </div>
            </div>
        </div>
    )
}

export default Login