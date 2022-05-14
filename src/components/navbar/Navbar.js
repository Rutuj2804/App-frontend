import { Button, IconButton } from '@mui/material'
import React from 'react'
import Logo from '../logo/Logo'
import { MdShoppingCart, MdOutlineSearch, MdOutlineLogout, MdDashboard } from 'react-icons/md'
import { HiPlus } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout_user } from '../../redux/actions'

const Navbar = ({ logout_user }) => {

    const navigate = useNavigate()

    return (
        <div className='container'>
            <div className='navbar__Wrapper'>
                <Logo />
                <div className='navbar__Right'>
                    <IconButton className='icon' onClick={()=>navigate('/product')}>
                        <MdOutlineSearch />
                    </IconButton>
                    <IconButton className='icon' onClick={()=>navigate('/add-product')}>
                        <HiPlus />
                    </IconButton>
                    <IconButton className='icon' onClick={()=>navigate('/dashboard')}>
                        <MdDashboard />
                    </IconButton>
                    <Button className='button-outline' onClick={()=>navigate('/cart')}>
                        <MdShoppingCart /> Cart
                    </Button>
                    <Button className='button' onClick={()=>logout_user(navigate)}>
                        <MdOutlineLogout />Logout
                    </Button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { logout_user })(Navbar)