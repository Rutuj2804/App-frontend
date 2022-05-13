import { Button, IconButton } from '@mui/material'
import React from 'react'
import Logo from '../logo/Logo'
import { MdShoppingCart } from 'react-icons/md'

const Navbar = () => {
    return (
        <div className='container'>
            <div className='navbar__Wrapper'>
                <Logo />
                <div className='navbar__Right'>
                    <IconButton>
                        <MdShoppingCart />
                    </IconButton>
                    <Button className='button'>
                        Login
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar