import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import CartItem from '../../components/cart-item/CartItem'
import { remove_to_cart, get_cart_items } from '../../redux/actions'
import { GrDeliver } from 'react-icons/gr'
import Message from '../../components/messages/Message'

const Cart = ({ get_cart_items, cart, remove_to_cart, success_message, error_message }) => {

    const [placeOrder, setplaceOrder] = useState({
        strike: 0,
        price: 0,
        items: 0
    })

    useEffect(()=>{
        get_cart_items()
    }, [])

    useEffect(()=>{
        if(cart){
            var strike=0;
            var price=0;
            for (let i = 0; i < cart.length; i++) {
                price += cart[i].product.discountedPrice;
                strike += cart[i].product.price;
            }
            setplaceOrder({ strike, price, items: cart.length })
        }
    }, [cart])

    return (
        <div className='cart__Wrapper'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-4 col-12'>
                        <form>
                            <div className='cart__Titles'>
                                <h4>Place Your Order</h4>
                            </div>
                            <textarea placeholder='Enter Your Address'></textarea>
                            <p><strike>${placeOrder.strike}</strike> - <span>${placeOrder.price}</span></p>
                            <div className='freedelivery'><GrDeliver />Free Delivery - <span>{placeOrder.items} items</span></div>
                            <Button type="submit">Place Order</Button>
                        </form>
                    </div>
                    <div className='col-lg-9 col-md-8 col-12'>
                        <div className='row'>
                            {
                                cart.map(item=>{
                                    return <div className='col-lg-4 col-md-6 col-12' key={item.product._id}>
                                        <CartItem
                                            name={item.product.name}
                                            image={`${process.env.REACT_APP_API_URL}/${item.product.image}`} 
                                            price={item.product.price} 
                                            discountedPrice={item.product.discountedPrice} 
                                            discountPercent={item.product.discountPercent}
                                            methodToRun={()=>remove_to_cart(item.product._id, item._id)}
                                            remove
                                        />
                                    </div>
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
            {success_message ? <Message message={success_message} mood={1} /> : null }
            {error_message ? <Message message={error_message} mood={0} /> : null }
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.Cart.cart,
    success_message: state.Cart.success,
    error_message: state.Cart.error,
})

export default connect(mapStateToProps, { get_cart_items, remove_to_cart })(Cart)