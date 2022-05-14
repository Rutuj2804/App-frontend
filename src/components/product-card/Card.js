import { Button } from '@mui/material'
import React from 'react'
import img1 from '../../assets/man.png'
import { GrDeliver } from 'react-icons/gr'
import { add_to_cart } from '../../redux/actions'
import { connect } from 'react-redux'

const Card = ({ name, image, price, discountedPrice, discountPercent, add_to_cart, id }) => {
    return (
        <div className='card__Wrapper'>
            <img src={image ? image : img1} alt="product" />
            <h4>{name}</h4>
            <p><strike>${price}</strike> <span className='price'>${discountedPrice}</span> - <span className='percent'>{discountPercent}% Off</span></p>
            <p className='delivery'>Free Delivery <GrDeliver /></p>
            <Button onClick={()=>add_to_cart(id)}>Add To Cart</Button>
        </div>
    )
}

export default connect(null, { add_to_cart })(Card)