import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/form.svg'
import { fetch_categories, add_product } from '../../redux/actions'
import Message from '../../components/messages/Message'

const AddProduct = ({ fetch_categories, categories, add_product, success_message, error_message, error_message_category }) => {

    const [ formData, setFormData ] = useState({ 
        name: '',
        description: '',
        category: '',
        price: '',
        discountedPrice: '',
        discountPercent: '',
        image: null 
    })

    const navigate = useNavigate()

    useEffect(()=>{
        fetch_categories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(()=>{
        if(categories)
            setFormData({ ...formData, category: categories[0]?._id })
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categories.length])

    const { name, description, category, price, discountedPrice, discountPercent, image } = formData;

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleImageChange = e => {
        setFormData({ ...formData, image: e.target.files[0] })
    }

    const handleSubmit = e => {
        e.preventDefault();
        add_product(name, description, category, price, discountedPrice, discountPercent, image, navigate);
        setFormData({ ...formData , 
            name: '',
            description: '',
            price: '',
            discountedPrice: '',
            discountPercent: '',
            image: null 
        })
    }

    return (
        <div className='addProduct__Wrapper'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <form onSubmit={handleSubmit}>
                            <div className='addProduct__Titles'>
                                <h4>Add Product</h4>
                            </div>
                            <div className='addProduct__InputDiv'>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={handleInputChange}
                                    placeholder="Enter Name Of The Product"
                                    required
                                    autoComplete='off'
                                />
                            </div>
                            <div className='addProduct__InputDiv'>
                                <textarea
                                    type="text"
                                    name="description"
                                    value={description}
                                    onChange={handleInputChange}
                                    placeholder="Enter Description Of The Product"
                                    required
                                    autoComplete='off'
                                />
                            </div>
                            <div className='addProduct__InputDiv'>
                                <select name='category' value={category} onChange={handleInputChange} >
                                    {
                                        categories.map(category=>(
                                            <option key={category._id} value={category._id}>{category.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className='addProduct__InputDiv'>
                                <input
                                    type="number"
                                    name="price"
                                    value={price}
                                    onChange={handleInputChange}
                                    placeholder="Enter Original Price Of The Product"
                                    required
                                    autoComplete='off'
                                />
                            </div>
                            <div className='addProduct__InputDiv'>
                                <input
                                    type="number"
                                    name="discountedPrice"
                                    value={discountedPrice}
                                    onChange={handleInputChange}
                                    placeholder="Enter Discounted Price Of The Product"
                                    required
                                    autoComplete='off'
                                />
                            </div>
                            <div className='addProduct__InputDiv'>
                                <input
                                    type="number"
                                    name="discountPercent"
                                    value={discountPercent}
                                    onChange={handleInputChange}
                                    placeholder="Enter Percentage Of Discount On The Product"
                                    required
                                    autoComplete='off'
                                />
                            </div>
                            <div className='addProduct__InputDiv'>
                                <input
                                    type="file"
                                    onChange={handleImageChange}
                                    placeholder="Enter discountPercent Of The Product"
                                    required
                                />
                            </div>
                            <Button type="submit">Add Product</Button>
                        </form>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12 mt-5'>
                        <img src={img1} alt="form" className='img-fluid' />
                    </div>
                </div>
            </div>
            { success_message ? <Message message={success_message} mood={1} />: null}
            { error_message ? <Message message={error_message} mood={0} />: null}
            { error_message_category ? <Message message={error_message_category} mood={0} />: null}
        </div>
    )
}

const mapStateToProps = state => ({
    categories: state.Category.categories,
    success_message: state.Product.success,
    error_message: state.Product.error,
    error_message_category: state.Category.error,
})

export default connect(mapStateToProps, { fetch_categories, add_product })(AddProduct)