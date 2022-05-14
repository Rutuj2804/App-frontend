import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { get_cart_items } from '../../redux/actions'

const Cart = ({ get_cart_items, cart }) => {

    useEffect(()=>{
        get_cart_items()
    }, [])
console.log(cart);
    return (
        <div>Cart</div>
    )
}

const mapStateToProps = state => ({
    cart: state.Cart.cart
})

export default connect(mapStateToProps, { get_cart_items })(Cart)