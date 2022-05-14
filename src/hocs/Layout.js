import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/loader/Loader'
import Message from '../components/messages/Message'
import Navbar from '../components/navbar/Navbar'

const Layout = ({ children, isAuthenticated, isLoading, message_global }) => {

    const navigate = useNavigate()

    useEffect(()=>{
      if(!isAuthenticated)
        navigate('/login')
    }, [isAuthenticated])

    return (
        <div>
            <Navbar />
            {isLoading ? <Loader /> : null}
            {message_global.message ? <Message mood={message_global.mood} message={message_global.message} />: null}
            {children}
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Authentication.isAuthenticated,
    isLoading: state.Loader.loading,
    message_global: state.Message,
})

export default connect(mapStateToProps)(Layout)