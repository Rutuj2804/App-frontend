import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { get_products, add_to_cart } from '../../redux/actions'
import CartItem from "../../components/cart-item/CartItem"
import Message from '../../components/messages/Message'
import Aos from "aos"

const Products = ({ get_products, products, add_to_cart, success_message, error_message }) => {

    useEffect(()=>{
        get_products()
    }, [])

    useEffect(()=>{
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div className='mt-4'>
            <div className='container'>
                <div className='row'>
                    <h4 className='mb-3'>All Products</h4>
                    {
                        products.map(product=>(
                            <div className='col-lg-3 col-md-4 col-12' data-aos="fade-up" key={product._id}>
                                <CartItem 
                                    key={product._id}
                                    id={product._id}
                                    name={`${product.name.slice(0,15)}...`}
                                    image={`${process.env.REACT_APP_API_URL}/${product.image}`} 
                                    price={product.price} 
                                    discountedPrice={product.discountedPrice} 
                                    discountPercent={product.discountPercent}
                                    methodToRun={()=>add_to_cart(product._id)}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            {success_message ? <Message message={success_message} mood={1} /> : null }
            {error_message ? <Message message={error_message} mood={0} /> : null }
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.Product.products,
    success_message: state.Cart.success,
    error_message: state.Cart.error,
})

export default connect(mapStateToProps, { get_products, add_to_cart })(Products)