import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { get_products } from '../../redux/actions'

const Products = ({ get_products, products }) => {

    useEffect(()=>{
        get_products()
    }, [])

    return (
        <div>Products</div>
    )
}

const mapStateToProps = state => ({
    products: state.Product.products
})

export default connect(mapStateToProps, { get_products })(Products)