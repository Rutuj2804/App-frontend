import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { get_product_by_id, add_to_cart } from '../../redux/actions'
import { GrDeliver } from 'react-icons/gr'
import { GiReturnArrow } from 'react-icons/gi'
import { BsCashStack } from 'react-icons/bs'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import Message from '../../components/messages/Message'

const ProductDetailPage = ({ get_product_by_id, product, add_to_cart, error, success_message, error_message }) => {

    const { id } = useParams()

    useEffect(()=>{
        get_product_by_id(id)
    }, [id])

    const addToCart = id => {
        add_to_cart(id)
    }

    return (
        <div className='detailPage__Wrapper'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-12 image'>
                        <img src={product?`${process.env.REACT_APP_API_URL}/${product.image}` : null} alt="Product" className='img-fluid' />
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <div className='leftsideDescription'>
                            <h3>{product  ?product.name : ""}</h3>
                            <p>{product  ?product.description : ""}</p>
                            <span className='label'>{product  ?product.category.name : ""}</span>
                            <div className='priceDescription'>
                                <p><strike>{product  ?`${product.price}$` : ""}</strike> - <span className='discountprice'>{product  ?`${product.discountedPrice}$` : ""}</span> <br/><span className='discount'>{product  ?`${product.discountPercent}% OFF` : ""}</span></p>
                            </div>
                            <Button onClick={()=>addToCart(id)} >Add To Cart</Button>
                            <div className='features'>
                                <div>
                                    <GrDeliver />
                                    <p>Free Delivery</p>
                                </div>
                                <div>
                                    <GiReturnArrow />
                                    <p>7 days return policy</p>
                                </div>
                                <div>
                                    <BsCashStack />
                                    <p>7 days return policy</p>
                                </div>
                                <div>
                                    <VscWorkspaceTrusted />
                                    <p>7 days return policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {success_message ? <Message message={success_message} mood={1} /> : null }
            {error_message ? <Message message={error_message} mood={0} /> : null }
            {error ? <Message message={error} mood={0} /> : null }
        </div>
    )
}

const mapStateToProps = state => ({
    product: state.Product.product,
    error: state.Product.error,
    success_message: state.Cart.success,
    error_message: state.Cart.error,
})

export default connect(mapStateToProps, { get_product_by_id, add_to_cart })(ProductDetailPage)