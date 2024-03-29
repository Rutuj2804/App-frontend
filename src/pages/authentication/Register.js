import { Button } from '@mui/material'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../../components/logo/Logo'
import { register_user } from '../../redux/actions'

const Register = ({ register_user, error, success }) => {

    const [ formData, setFormData ] = useState({
        username: '',
        firstname: '',
        lastname: '',
        password: '',
    })

    const navigate = useNavigate()

    const { username, firstname, lastname, password } = formData

    const handleChangeInInput = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        register_user(username, password, firstname, lastname, navigate)
    }

    return (
        <div className='auth__Wrapper'>
            <div className='auth__Container'>
                <div className='auth__Titles'>
                    <Logo />
                </div>
                <form onSubmit={handleFormSubmit}>
                    {error ?<div className='auth__Errors'>
                        <p>{error}</p>
                    </div>: null}
                    {success ?<div className='auth__Success'>
                        <p>{success}</p>
                    </div>: null}
                    <div className='auth__InputDiv'>
                        <input
                            type="text"
                            name="firstname"
                            value={firstname}
                            onChange={handleChangeInInput}
                            required
                            autoComplete='false'
                        />
                        <label>First Name</label>
                    </div>
                    <div className='auth__InputDiv'>
                        <input
                            type="text"
                            name="lastname"
                            value={lastname}
                            onChange={handleChangeInInput}
                            required
                            autoComplete='false'
                        />
                        <label>Last Name</label>
                    </div>
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
                    <div className='auth__InternalLinks'>
                        <p>By Registering you are agreeing to our <span>Terms and Conditions</span></p>
                    </div>
                    <Button type='submit'>Register</Button>
                </form>
                <div className='auth__ExternalLinks'>
                    <p>Already have an Account ? <NavLink to="/login">Login Now</NavLink></p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    error: state.Authentication.error,
    success: state.Authentication.success,
})

export default connect(mapStateToProps, { register_user })(Register)