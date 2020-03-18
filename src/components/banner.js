import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Typical from 'react-typical'
// import img1 from '../../public'
// import bgimg from "../public/img/home-bg-2.jpeg";

class banner extends Component {
    render() {

        return (
            <>
                <div className="banner-area" id="home" style={{background: `url('../../img/home-bg-2.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    
                    <Particles />
                    <div className="banner-table">
                        <div className="banner-table-cell">
                            <div className="welcome-text">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <section className="intro animate-scale">

                                                <h3>Welcome to My Website</h3>
                                                
                                                <section class="cd-intro">
                                                    <h1 class="cd-headline clip is-full-width">                                                        
                                                        <Typical
                                                            steps={['', 2000, 'Md shabaz', 1000, '', 2000, 'Web Designer', 1000, '', 2000, 'Web Developer', 1000, '', 2000, 'Frontend Developer', 1000]}
                                                            loop={Infinity}
                                                            wrapper="p"
                                                        />
                                                    </h1>
                                                </section>

                                                <a href="#contact" className="banner-btn">Contact me</a>


                                            </section>

                                            <div className="clearfix"></div>

                                            <a className="mouse-scroll hidden-xs" href="#about">
                                                <span className="mouse">
                                                    <span className="mouse-movement"></span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default banner;