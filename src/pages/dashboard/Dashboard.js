import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { get_all_user } from '../../redux/actions'
import moment from 'moment'

const Dashboard = ({ get_all_user, users }) => {

    useEffect(()=>{
        get_all_user()
    }, [])

    return (
        <div className='dashboard__Wrapper'>
            <div className='container'>
                <div className='dashboard__Titles'>
                    <h4>All Users</h4>
                </div>
                <table>
                    <thead>
                        <th>Fisrt Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Is Admin</th>
                        <th>Joined Ad</th>
                    </thead>
                    <tbody>
                        {
                            users.map(user=>{
                                return <tr key={user._id}>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.userName}</td>
                                        <td>{`${user.isAdmin}`}</td>
                                        <td>{moment(user.createdAt).fromNow()}</td>
                                    </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    users: state.Authentication.users
})

export default connect(mapStateToProps, { get_all_user })(Dashboard)