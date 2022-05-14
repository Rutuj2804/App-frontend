import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/loader/Loader'
import Navbar from '../components/navbar/Navbar'

const Layout = ({ children, isAuthenticated, isLoading }) => {

    const navigate = useNavigate()

    useEffect(()=>{
      if(!isAuthenticated)
        navigate('/login')
    }, [isAuthenticated])

    return (
        <div>
            <Navbar />
            {isLoading ? <Loader /> : null}
            {children}
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Authentication.isAuthenticated,
    isLoading: state.Loader.loading,
})

export default connect(mapStateToProps)(Layout)