import { Button, Checkbox } from '@mui/material'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../../components/logo/Logo'
import { login_user } from '../../redux/actions'

const Login = ({ login_user, error, success }) => {

    const [ formData, setFormData ] = useState({
        username: '',
        password: '',
    })

    const { username, password } = formData

    const navigate = useNavigate()

    const handleChangeInInput = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        login_user(username, password, navigate)
    }

    return (
        <div className='auth__Wrapper'>
            <div className='auth__Container'>
                <div className='auth__Titles'>
                    <Logo />
                    <h6>Login To Continue</h6>
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

const mapStateToProps = state => ({
    error: state.Authentication.error,
    success: state.Authentication.success
})

export default connect(mapStateToProps, { login_user })(Login)