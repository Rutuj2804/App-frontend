import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const NonAuthLayout = ({ children, isAuthenticated }) => {

  const navigate = useNavigate()

  useEffect(()=>{
    if(isAuthenticated){
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  return (
    <div>{children}</div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.Authentication.isAuthenticated
})

export default connect(mapStateToProps)(NonAuthLayout)