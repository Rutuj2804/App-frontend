import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { get_products, add_to_cart } from '../../redux/actions'
import CartItem from "../../components/cart-item/CartItem"

const Products = ({ get_products, products, add_to_cart }) => {

    useEffect(()=>{
        get_products()
    }, [])

    return (
        <div className='mt-4'>
            <div className='container'>
                <div className='row'>
                    <h4 className='mb-3'>All Products</h4>
                    {
                        products.map(product=>(
                            <div className='col-lg-3 col-md-4 col-12' key={product._id}>
                                <CartItem 
                                    key={product._id}
                                    name={product.name}
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
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.Product.products
})

export default connect(mapStateToProps, { get_products, add_to_cart })(Products)