import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import { Form } from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';

class contact extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }
    handleSubmit(e) {
        e.preventDefault()
        const { name, email, subject, message } = this.state
        let templateParams = {
            from_name: email,
            to_name: '<YOUR_EMAIL_ID>',
            subject: subject,
            message_html: message,
        }
        emailjs.send(
            'gmail',
            'template_XXXXXXXX',
            templateParams,
            'user_XXXXXXXXXXXXXXXXXXXX'
        )
        this.resetForm()
    }
    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }
    render() {
        return (
            <>
                <div class="contact-area section-padding" id="contact">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <ScrollAnimation animateIn=' zoomIn'>
                                    <div class="section-header">
                                        <p class="line-one"></p>
                                        <h2>Contact</h2>
                                        <p class="line-one"></p>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-3 col-sm-6">
                                <div class="single-contact text-center wow fadeInDown" data-wow-delay="0.4s">
                                    <ScrollAnimation animateIn='bounce'>
                                        <i class="fa fa-home"></i>
                                    </ScrollAnimation>
                                    <h2>Location</h2>
                                    <p>1600, 15 part2, Gurgaon, India</p>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="single-contact text-center wow fadeInDown" data-wow-delay="0.6s">
                                    <ScrollAnimation animateIn='bounce' delay={1000}>
                                        <i class="fa fa-phone"></i>
                                    </ScrollAnimation>
                                    <h2>Phone: </h2>
                                    <p>(+91) 9643012021</p>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="single-contact text-center wow fadeInDown" data-wow-delay="0.8s">
                                    <ScrollAnimation animateIn='bounce' delay={2000}>
                                        <i class="fa fa-envelope-o"></i>
                                    </ScrollAnimation>
                                    <h2>Email</h2>
                                    <p>earnto@gmail.com</p>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="single-contact text-center wow fadeInDown" data-wow-delay="1s">
                                    <ScrollAnimation animateIn='bounce' delay={3000}>
                                        <i class="fa fa-gg"></i>
                                    </ScrollAnimation>
                                    <h2>Social Media: </h2>
                                    <div class="socials">
                                        <a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a>
                                        <a href="https://www.linkedin.com/" target="_blank"><i class="fa fa-linkedin"></i></a>
                                        <a href="https://twitter.com/?lang=en" target="_blank"><i class="fa fa-twitter"></i></a>
                                        <a href="https://www.pinterest.com/" target="_blank"><i class="fa fa-pinterest"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">

                            <div class="col-md-10 col-md-offset-1">
                                <form id="contact-form" method="post" action="contact.php" class="wow fadeInDown" data-wow-delay="1.2s">

                                    <div class="messages"></div>

                                    <div class="controls">
                                        <form onSubmit={this.handleSubmit.bind(this)}>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <input id="form_name" type="text" name="name" class="form-control" placeholder="Enter your full name *" required="required" data-error="Fullname is required." />
                                                        {/* <input
                                                            class="form-control"
                                                            type="text"
                                                            name="name"
                                                            value={this.state.name}
                                                            className="text-primary"
                                                            onChange={this.handleChange.bind(this, 'name')}
                                                            placeholder="Name"
                                                        /> */}
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <input id="form_email" type="email" name="email" class="form-control" placeholder="Enter your email *" required="required" data-error="Valid email is required." />
                                                        {/* <input
                                                            class="form-control"
                                                            type="email"
                                                            name="email"
                                                            value={this.state.email}
                                                            className="text-primary"
                                                            onChange={this.handleChange.bind(this, 'email')}
                                                            placeholder="Enter email"
                                                        /> */}
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <textarea id="form_message" name="message" class="form-control" placeholder="You Can Type Your Message *" rows="4" required="required" data-error="Leave a message for me"></textarea>
                                                        {/* <input
                                                            type="textarea"
                                                            name="message"
                                                            className="form-control"
                                                            value={this.state.message}
                                                            onChange={this.handleChange.bind(this, 'message')}
                                                            placeholder="You Can Type Your Message *"
                                                        /> */}
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <ScrollAnimation offset={60} animateIn='bounceInLeft'>
                                                        <button type="submit" class="btn btn-send" value="">Send message</button>
                                                    </ScrollAnimation>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default contact;