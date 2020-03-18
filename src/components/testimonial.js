import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import ScrollAnimation from 'react-animate-on-scroll';

class testimonial extends Component {

    render() {
        const slides = [
            { title: 'First item', image: "/img/pic.jpg", description: 'Lorem ipsum' },
            { title: 'Second item', image: "/img/testi-2.jpg", description: 'Lorem ipsum' }
        ];
        return (
            <>
                <div id="testimonial" class="testimonial-area section-padding" style={{ background: `url('../../img/testi-bg.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <ScrollAnimation animateIn=' zoomIn'>
                                    <div class="section-header">
                                        <p class="line-one"></p>
                                        <h2>What Clients Say</h2>
                                        <p class="line-one"></p>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10 col-md-offset-1">
                            <ScrollAnimation animateIn='bounceInLeft'>
                                <div class="review-area">
                                    <div id="testimonial-carousel" class="owl-carousel owl-theme">

                                        <Slider>
                                            {slides.map((slide, index) => <div key={index}>

                                                <div class="single-testi text-center item" key={index}>
                                                    <div class="testi-img">
                                                        <img src={process.env.PUBLIC_URL + `${slide.image}`} alt="client_image1" />
                                                    </div>
                                                    <div class="block-quote">
                                                        <p>My Experience working with Md has been very positive. I always receive quality service from him. I highly recommend this guy to everyone because I think he is one a of kind.</p>
                                                        <h2>Jane Doe</h2>
                                                        <h3>CEO, Houston</h3>
                                                    </div>
                                                </div>
                                            </div>)}
                                        </Slider>

                                    </div>
                                </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default testimonial;