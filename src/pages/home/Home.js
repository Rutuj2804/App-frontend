import React from 'react'
import img1 from '../../assets/pqr.png'
import img2 from '../../assets/def.jpg'
import img3 from '../../assets/tuv.jpg'
import img4 from '../../assets/illustration.svg'
import { BsMouse } from 'react-icons/bs'
import Card from '../../components/product-card/Card'
import { Button } from '@mui/material'

const Home = () => {
    return (
        <div className='home__Wrapper'>

            <section>
                <div className='home__TopBanner'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-5 col-md-6 col-12 home__Left'>
                                <h1>Every Purchase Will <br/>Be Made With Pleasure</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                                <button><BsMouse />Get Started</button>
                            </div>
                            <div className='col-lg-7 col-md-6 col-12 home__Right'>
                                <img src={img1} alt='background' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home__BottomScroll'>
                    <div className='container'>
                        <div className='home__Scrollable'>
                            <div className='home__Cards'>
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </div>
                            <div className='home__ArrowLeft'></div>
                            <div className='home__ArrowRight'></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='home__TopBanner'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-7 col-md-6 col-12 home__Right'>
                                <img src={img2} alt='background' className='img-fluid' />
                            </div>
                            <div className='col-lg-5 col-md-6 col-12 home__Left'>
                                <h1>Every Purchase Will <br/>Be Made With Pleasure</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                                <button><BsMouse />Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home__BottomScroll'>
                    <div className='container'>
                        <div className='home__Scrollable'>
                            <div className='home__Cards'>
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </div>
                            <div className='home__ArrowLeft'></div>
                            <div className='home__ArrowRight'></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='home__TopBanner'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-5 col-md-6 col-12 home__Left'>
                                <h1>Every Purchase Will <br/>Be Made With Pleasure</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                                <button><BsMouse />Get Started</button>
                            </div>
                            <div className='col-lg-7 col-md-6 col-12 home__Right'>
                                <img src={img3} alt='background' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home__BottomScroll'>
                    <div className='container'>
                        <div className='home__Scrollable'>
                            <div className='home__Cards'>
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </div>
                            <div className='home__ArrowLeft'></div>
                            <div className='home__ArrowRight'></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='home__ContactUs'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-12'>
                            <img src={img4} alt="contact" className='img-fluid' />
                        </div>
                        <div className='col-lg-6 col-md-6 col-12'>
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
      </div>
    )
}

export default Home