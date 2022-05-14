import { Button } from '@mui/material'
import React from 'react'
import img1 from '../../assets/man.png'
import { GrDeliver } from 'react-icons/gr'

const Card = ({ name, image, price, discountedPrice, discountPercent }) => {
    return (
        <div className='card__Wrapper'>
            <img src={image ? image : img1} alt="product" />
            <h4>{name}</h4>
            <p><strike>${price}</strike> <span className='price'>${discountedPrice}</span> - <span className='percent'>{discountPercent}% Off</span></p>
            <p className='delivery'>Free Delivery <GrDeliver /></p>
            <Button>Add To Cart</Button>
        </div>
    )
}

export default Card