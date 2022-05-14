import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { get_all_user } from '../../redux/actions'

const Dashboard = ({ get_all_user }) => {

    useEffect(()=>{
        get_all_user()
    }, [])

    return (
        <div>Dashboard</div>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { get_all_user })(Dashboard)