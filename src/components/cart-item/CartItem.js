import { Button } from '@mui/material'
import React from 'react'
import img1 from '../../assets/man.png'
import { GrDeliver } from 'react-icons/gr'

const CartItem = ({ name="Product Name", image, price="1999", discountedPrice="1499", discountPercent="25", methodToRun, remove }) => {
    return (
        <div className='card__Wrapper'>
            <img src={image ? image : img1} alt="product" />
            <h4>Product Name</h4>
            <p><strike>${price}</strike> <span className='price'>${discountedPrice}</span> - <span className='percent'>{discountPercent}% Off</span></p>
            <p className='delivery'>Free Delivery <GrDeliver /></p>
            <Button onClick={methodToRun}>{remove ? "Remove From Cart" : "Add To Cart"}</Button>
        </div>
    )
}

export default CartItem