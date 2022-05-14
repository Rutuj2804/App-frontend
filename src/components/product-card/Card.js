import { Button } from '@mui/material'
import React from 'react'
import image from '../../assets/man.png'
import { GrDeliver } from 'react-icons/gr'

const Card = () => {
    return (
        <div className='card__Wrapper'>
            <img src={image} alt="product" />
            <h4>Payment Made Easy</h4>
            <p><strike>$1999</strike> <span className='price'>$1499</span> - <span className='percent'>25% Off</span></p>
            <p className='delivery'>Free Delivery <GrDeliver /></p>
            <Button>Add To Cart</Button>
        </div>
    )
}

export default Card