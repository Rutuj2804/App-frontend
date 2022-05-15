import React, { useEffect, useRef } from 'react'
import img1 from '../../assets/pqr.png'
import img2 from '../../assets/def.jpg'
import img3 from '../../assets/tuv.jpg'
import img4 from '../../assets/illustration.svg'
import { BsMouse } from 'react-icons/bs'
import Card from '../../components/product-card/Card'
import { Button } from '@mui/material'
import { get_product_category_wise, get_product_electronics, get_product_footwear } from '../../redux/actions'
import { connect } from 'react-redux'
import Message from '../../components/messages/Message'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Aos from "aos"
import { useNavigate } from 'react-router-dom'

const Home = ({ get_product_category_wise, clothing, electronics, success_message, error_message, get_product_electronics, get_product_footwear, footwear }) => {

    useEffect(()=>{
        get_product_category_wise()
        get_product_electronics()
        get_product_footwear()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const navigate = useNavigate()

    useEffect(()=>{
        Aos.init({ duration: 1000 })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const mensClothing = useRef(null)
    const electronicsRef = useRef(null)
    const footwearRef = useRef(null)

    return (
        <div className='home__Wrapper'>

            <section>
                <div className='home__TopBanner'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-5 col-md-6 col-12 home__Left' data-aos="fade-up">
                                <h1>Every Purchase Will <br/>Be Made With Pleasure</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                                <button onClick={()=>navigate('/product')}><BsMouse />Get Started</button>
                            </div>
                            <div className='col-lg-7 col-md-6 col-12 home__Right' data-aos="fade-down">
                                <img src={img1} alt='background' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home__BottomScroll'>
                    <div className='container'>
                        <div className='home__Scrollable'>
                            <div className='home__Cards' ref={mensClothing}>
                                {
                                    clothing.map(item=>{
                                        return <Card 
                                            key={item._id}
                                            name={`${item.name.slice(0, 10)}...`}
                                            image={`${process.env.REACT_APP_API_URL}/${item.image}`} 
                                            price={item.price} 
                                            discountedPrice={item.discountedPrice} 
                                            discountPercent={item.discountPercent} 
                                            id={item._id}
                                        />
                                    })
                                }
                            </div>
                            <div className='home__ArrowLeft' onClick={()=>mensClothing.current.scrollBy({ left: -200, right: 0, behaviour: "smooth" })} ><AiOutlineLeft /></div>
                            <div className='home__ArrowRight' onClick={()=>mensClothing.current.scrollBy({ left: 200, right: 0, behaviour: "smooth" })} ><AiOutlineRight /></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='home__TopBanner'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-7 col-md-6 col-12 home__Right' data-aos="fade-down">
                                <img src={img2} alt='background' className='img-fluid' />
                            </div>
                            <div className='col-lg-5 col-md-6 col-12 home__Left'  data-aos="fade-up">
                                <h1>Stay Updated <br/>With Latest Fashion</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                                <button onClick={()=>navigate('/product')}><BsMouse />Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home__BottomScroll'>
                    <div className='container'>
                        <div className='home__Scrollable'>
                            <div className='home__Cards' ref={electronicsRef}>
                                {
                                    electronics.map(item=>{
                                        return <Card 
                                            key={item._id}
                                            name={`${item.name.slice(0, 10)}...`}
                                            image={`${process.env.REACT_APP_API_URL}/${item.image}`} 
                                            price={item.price} 
                                            discountedPrice={item.discountedPrice} 
                                            discountPercent={item.discountPercent} 
                                            id={item._id}
                                        />
                                    })
                                }
                            </div>
                            <div className='home__ArrowLeft' onClick={()=>electronicsRef.current.scrollBy({ left: -200, right: 0, behaviour: "smooth" })} ><AiOutlineLeft /></div>
                            <div className='home__ArrowRight' onClick={()=>electronicsRef.current.scrollBy({ left: 200, right: 0, behaviour: "smooth" })} ><AiOutlineRight /></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='home__TopBanner'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-5 col-md-6 col-12 home__Left'  data-aos="fade-up">
                                <h1>Stay Updated <br/>With Latest Fashion</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                                <button onClick={()=>navigate('/product')}><BsMouse />Check Out</button>
                            </div>
                            <div className='col-lg-7 col-md-6 col-12 home__Right'  data-aos="fade-down">
                                <img src={img3} alt='background' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home__BottomScroll'>
                    <div className='container'>
                        <div className='home__Scrollable'>
                            <div className='home__Cards' ref={footwearRef}>
                                {
                                    footwear.map(item=>{
                                        return <Card 
                                            key={item._id}
                                            name={`${item.name.slice(0, 10)}...`}
                                            image={`${process.env.REACT_APP_API_URL}/${item.image}`} 
                                            price={item.price} 
                                            discountedPrice={item.discountedPrice} 
                                            discountPercent={item.discountPercent} 
                                            id={item._id}
                                        />
                                    })
                                }
                            </div>
                            <div className='home__ArrowLeft' onClick={()=>footwearRef.current.scrollBy({ left: -200, right: 0, behaviour: "smooth" })} ><AiOutlineLeft /></div>
                            <div className='home__ArrowRight' onClick={()=>footwearRef.current.scrollBy({ left: 200, right: 0, behaviour: "smooth" })} ><AiOutlineRight /></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='home__ContactUs'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-12' data-aos="fade-up">
                            <img src={img4} alt="contact" className='img-fluid' />
                        </div>
                        <div className='col-lg-6 col-md-6 col-12' data-aos="fade-down">
                            <form>
                                <div className='home__Titles'>
                                    <h4>Contact Us</h4>
                                </div>
                                <div className='home__InputDiv'>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder='Enter Your Email'
                                    />
                                </div>
                                <div className='home__InputDiv'>
                                    <textarea
                                        type="text"
                                        name="email"
                                        placeholder='Enter Your Message'
                                    />
                                </div>
                                <Button>Send</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {success_message ? <Message message={success_message} mood={1} /> : null }
            {error_message ? <Message message={error_message} mood={0} /> : null }
      </div>
    )
}

const mapStateToProps = state => ({
    clothing: state.Product.clothing,
    electronics: state.Product.electronics,
    footwear: state.Product.footwear,
    success_message: state.Cart.success,
    error_message: state.Cart.error,
})

export default connect(mapStateToProps, { get_product_category_wise, get_product_electronics, get_product_footwear })(Home)