import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class about extends Component {
    render() {
        return (
            <>
                <div className="about-area section-padding" id="about">
                    <div className="container" style = {{position:'relative'}}>
                        <div className="cen">
                        <ScrollAnimation delay={4000} duration={6}
                            animateIn='hinge'
                            initiallyVisible={true}>
                            <div className="eyecatchy">
                                <p>&#128525; Do you love creativity checkout this &#128525;</p>
                                <a href="http://www.eyecatchyarts.com/"><span style = {{color:'yellow', fontSize:'16px'}}>&#9992;</span>Click eyecatchyarts <span style = {{color:'yellow', fontSize:'16px'}}>&#9992;</span> </a>
                            </div>
                        </ScrollAnimation>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-xs-12 col-sm-6 col-lg-4">
                                <ScrollAnimation animateIn='bounceInLeft'>
                                    <div className="test">
                                        <div className="about-text-left">
                                            <h2>Md Shahbaz</h2>
                                            <h3>UI Designer / Developer</h3>
                                            <p>I am ui designer & Front-end Developer, working for the last five years. I have experience working with local clients along with clients from all around the world. I have vast knowledge in html, css, Javascript , JQuery, React (javascript framewok), CMS theming ex - wordpress theme  and so on. </p>
                                            <a className="download-cv" href={process.env.PUBLIC_URL + '/img/ui_resume.doc'} download>Download CV &nbsp; &nbsp;<i style={{ background: `url('../../img/download-arr.png')` }} className="download-icon"></i></a>
                                        </div>
                                    </div>
                                </ScrollAnimation>

                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <ScrollAnimation animateIn='flipInY' animateOut='flipOutY' delay={1000}>
                                    <img id="my-person-img" src={process.env.PUBLIC_URL + '/img/pic.jpg'} class="img-responsive" alt="my_pic" />
                                </ScrollAnimation>
                            </div>

                            <div className="col-md-4 col-xs-12 col-sm-12 col-lg-4">
                                <ScrollAnimation animateIn='bounceInRight'>
                                    <div className="about-text-right">

                                        <div id="skills">

                                            <h3>My Skills</h3>

                                            <div className="row">

                                                <div className="col-md-12">

                                                    <div className="skillbar" data-percent="95%">

                                                        <h6 className="skillbar-title">HTML / CSS</h6>
                                                        <div className="progress">
                                                            <ScrollAnimation offset={60} duration={5} animateIn='bounceInLeft'>
                                                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="95"
                                                                    aria-valuemin="0" aria-valuemax="100" style={{ width: '95%' }}>
                                                                    95% Complete
                                                        </div>
                                                            </ScrollAnimation>
                                                        </div>



                                                    </div>

                                                </div>


                                                <div className="col-md-12">

                                                    <div className="skillbar" data-percent="70%">

                                                        <h6 className="skillbar-title">JAVASCRIPT</h6>
                                                        <div className="progress">
                                                            <ScrollAnimation offset={60} duration={5} animateIn='bounceInLeft'>
                                                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="70"
                                                                    aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
                                                                    70% Complete
                                                        </div>
                                                            </ScrollAnimation>
                                                        </div>



                                                    </div>

                                                </div>

                                                <div className="col-md-12">

                                                    <div className="skillbar" data-percent="85%">

                                                        <h6 className="skillbar-title">Less/Sass</h6>
                                                        <div className="progress">
                                                            <ScrollAnimation offset={60} duration={5} animateIn='bounceInLeft'>
                                                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="85"
                                                                    aria-valuemin="0" aria-valuemax="100" style={{ width: '85%' }}>
                                                                    85% Complete
                                                        </div>
                                                            </ScrollAnimation>
                                                        </div>



                                                    </div>

                                                </div>


                                                <div className="col-md-12">

                                                    <div className="skillbar" data-percent="65%">

                                                        <h6 className="skillbar-title">React/Jquery</h6>
                                                        <div className="progress">
                                                            <ScrollAnimation offset={20} duration={5} animateIn='bounceInLeft'>
                                                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="65"
                                                                    aria-valuemin="0" aria-valuemax="100" style={{ width: '65%' }}>
                                                                    65% Complete
                                                        </div>
                                                            </ScrollAnimation>
                                                        </div>



                                                    </div>

                                                </div>

                                                <div className="col-md-12">


                                                    <div className="skillbar" data-percent="90%">

                                                        <h6 className="skillbar-title">Bootstraps</h6>
                                                        <div className="progress">
                                                            <ScrollAnimation offset={20} duration={5} animateIn='bounceInLeft'>
                                                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="90"
                                                                    aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}>
                                                                    90% Complete
                                                        </div>
                                                            </ScrollAnimation>
                                                        </div>



                                                    </div>


                                                </div>
                                                <div className="col-md-12">

                                                    <div className="skillbar" data-percent="80%">

                                                        <h6 className="skillbar-title">CMS Theaming</h6>
                                                        <div className="progress">
                                                            <ScrollAnimation offset={20} duration={5} animateIn='bounceInLeft'>
                                                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="80"
                                                                    aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}>
                                                                    90% Complete
                                                        </div>
                                                            </ScrollAnimation>
                                                        </div>



                                                    </div>

                                                </div>

                                            </div>

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

export default about;