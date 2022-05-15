import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import CartItem from '../../components/cart-item/CartItem'
import { remove_to_cart, get_cart_items, place_order } from '../../redux/actions'
import { GrDeliver } from 'react-icons/gr'
import Message from '../../components/messages/Message'
import Aos from "aos"

const Cart = ({ get_cart_items, cart, remove_to_cart, success_message, error_message, success_place_order_message, error_place_order_message, place_order }) => {

    const [placeOrder, setplaceOrder] = useState({
        strike: 0,
        price: 0,
        items: 0
    })

    const [ address, setAddress ] = useState('')

    useEffect(()=>{
        get_cart_items()
    }, [])

    useEffect(()=>{
        Aos.init({ duration: 1000 })
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

    const placeOrderOnSubmit = e => {
        e.preventDefault();
        var products = [];
        for (let i = 0; i < cart.length; i++) {
            products.push(cart[i].product._id)
        }
        place_order(products, address)
        setAddress('')
    }

    return (
        <div className='cart__Wrapper'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-4 col-12'>
                        <form onSubmit={placeOrderOnSubmit}>
                            <div className='cart__Titles'>
                                <h4>Place Your Order</h4>
                            </div>
                            <textarea 
                                placeholder='Enter Your Address'
                                value={address}
                                onChange={e=>setAddress(e.target.value)}
                            ></textarea>
                            <p><strike>${placeOrder.strike}</strike> - <span>${placeOrder.price}</span></p>
                            <div className='freedelivery'><GrDeliver />Free Delivery - <span>{placeOrder.items} items</span></div>
                            <Button type="submit">Place Order</Button>
                        </form>
                    </div>
                    <div className='col-lg-9 col-md-8 col-12'>
                        <div className='row'>
                            {
                                cart.map(item=>{
                                    return <div className='col-lg-4 col-md-6 col-12' data-aos="fade-up" key={item.product._id}>
                                        <CartItem
                                            key={item._id}
                                            id={item.product._id}
                                            name={`${item.product.name.slice(0,15)}...`}
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
                            <p className='text-center cart__Message'>{ cart.length === 0 ? "No items in Cart, Add Items To Place Order" :null}</p>
                        </div>
                    </div>
                </div>
            </div>
            {success_message ? <Message message={success_message} mood={1} /> : null }
            {error_message ? <Message message={error_message} mood={0} /> : null }
            {success_place_order_message ? <Message message={success_place_order_message} mood={1} /> : null }
            {error_place_order_message ? <Message message={error_place_order_message} mood={0} /> : null }
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.Cart.cart,
    success_message: state.Cart.success,
    error_message: state.Cart.error,
    success_place_order_message: state.Order.success,
    error_place_order_message: state.Order.error,
})

export default connect(mapStateToProps, { get_cart_items, remove_to_cart, place_order })(Cart)