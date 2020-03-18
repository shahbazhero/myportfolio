import React, { Component } from 'react';
import Modal from 'react-modal';
import ScrollAnimation from 'react-animate-on-scroll';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class portfolio extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            modalContent: [
                { img: '/img/port1.png',title: 'FashionDistrict', subheading: 'Fashion District is Philly’s newest destination for shopping, dining, entertainment, art and culture.', Client: 'Reebok', Completed: '15/04/2019', Type: 'Ruby rails', link: 'https://fashiondistrictphiladelphia.com/' },
                { img: '/img/port2.png',title: 'Grey Trunk RFID', subheading: 'Helps save time, money and hassles, making it easy for organizations to track their assets, decreasing downtime, lost property and the cost incurred by replacing unneeded equipment and materials.', Client: 'Reebok', Completed: '12/03/2018', Type: 'Ruby & rails', link: 'https://greytrunkrfid.com/' },
                { img: '/img/port3.jpg',title: 'Project Three', subheading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', Client: 'Reebok', Completed: '15/03/2018', Type: 'WordPress Site', link: 'www.reebok.com' },
                { img: '/img/port4.jpg',title: 'Project Four', subheading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', Client: 'Reebok', Completed: '15/03/2018', Type: 'WordPress Site', link: 'www.reebok.com' },
                { img: '/img/port5.jpg',title: 'Project Five', subheading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', Client: 'Reebok', Completed: '15/03/2018', Type: 'WordPress Site', link: 'www.reebok.com' },
                { img: '/img/port6.jpg',title: 'Project Six', subheading: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', Client: 'Reebok', Completed: '15/03/2018', Type: 'WordPress Site', link: 'www.reebok.com' },
            ],
            portfolioContent: [
                { img: '/img/port1.png', projectname: 'FashionDistrict', note:'Click to know more', projectdisc: 'Fashion District is Philly’s newest destination for shopping, dining, entertainment, art and culture.' },
                { img: '/img/port2.png', projectname: 'Grey Trunk RFID', note:'Click to know more', projectdisc: 'Helps save time, money and hassles, making it easy for organization...' },
                { img: '/img/port3.jpg', projectname: 'Project Three', note:'Click to know more', projectdisc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolores, velit. Accusantium mollitia obcaecati quos.' },
                { img: '/img/port4.jpg', projectname: 'Project Four', note:'Click to know more', projectdisc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolores, velit. Accusantium mollitia obcaecati quos.' },
                { img: '/img/port5.jpg', projectname: 'Project Five', note:'Click to know more', projectdisc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolores, velit. Accusantium mollitia obcaecati quos.' },
                { img: '/img/port6.jpg', projectname: 'Project Six', note:'Click to know more', projectdisc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolores, velit. Accusantium mollitia obcaecati quos.' }
            ],
            indexValue: 0
        };

        this.openModal = this.openModal.bind(this);
        // this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }


    openModal(e) {        
        this.setState({ modalIsOpen: true, indexValue: e });
    }

    // afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     this.subtitle.style.color = '#f00';
    // }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    render() {
        return (
            <>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    {/* <h2 ref={subtitle => this.subtitle = subtitle}></h2> */}
                    <div id="test-popup" className="mfp-with-anim mfp-hide">
                        <div className="row">
                            <div className="col-md-7 col-sm-12">
                                <div className="por-img">
                                    <img src={process.env.PUBLIC_URL + `${this.state.modalContent[this.state.indexValue].img}`} alt="portfolio image15" className="img-responsive" />
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-12">
                                <div className="por-text">
                                    <h2>{this.state.modalContent[this.state.indexValue].title}</h2>
                                    <p>{this.state.modalContent[this.state.indexValue].subheading}</p>
                                    <div className="por-text-details">
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <p>Client: </p>
                                                <p>Completed:</p>
                                                <p>Type:</p>
                                                <p>link:</p>
                                            </div>
                                            <div className="col-sm-offset-1 col-sm-7">
                                                <p>{this.state.modalContent[this.state.indexValue].Client}</p>
                                                <p>{this.state.modalContent[this.state.indexValue].Completed}</p>
                                                <p>{this.state.modalContent[this.state.indexValue].Type}</p>
                                                <p>{this.state.modalContent[this.state.indexValue].link}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="mfp-close" onClick={this.closeModal}>x</button>
                        </div>
                    </div>

                </Modal>
                <div id="portfolio" className="portfolio-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                            <ScrollAnimation animateIn=' zoomIn'>
                                <div className="section-header">
                                    <p className="line-one"></p>
                                    <h2>My Works</h2>
                                    <p className="line-one"></p>
                                </div>
                            </ScrollAnimation>
                            </div>
                        </div>

                        <div className="row">
                            <div className="portfolio-items">
                                {this.state.portfolioContent.map((item, index) =>
                                    <div className="col-md-4 col-sm-6 col-xs-12 no-pad" key={index}>
                                        <div onClick={()=>this.openModal(index)} id="inline-popups" className="port-box">
                                            <a href="#test-popup" data-effect="mfp-zoom-out">
                                                <div className="hovereffect">
                                                    <img src={process.env.PUBLIC_URL + `${item.img}`} alt="portfolio image16" className="img-responsive" />
                                                    <div className="overlay">
                                                        <h2>{item.projectname}</h2>
                                                        <p>{item.projectdisc}</p>
                                                        <p>{item.note}</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                )}
                                {/* 
                                <div className="col-md-4 col-sm-6 col-xs-12 no-pad">
                                    <div onClick={this.openModal} id="inline-popups" className="port-box">
                                        <a href="#test-popup" data-effect="mfp-zoom-out">
                                            <div className="hovereffect">
                                                <img src={process.env.PUBLIC_URL + '/img/port1.jpg'} alt="portfolio image16" className="img-responsive" />
                                                <div className="overlay">
                                                    <h2>Project One</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolores, velit. Accusantium mollitia obcaecati quos.</p>
                                                </div>

                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-6 col-xs-12 no-pad">
                                    <div id="inline-popups-2">
                                        <a href="#test-popup-2" data-effect="mfp-zoom-out">
                                            <div className="hovereffect">
                                                <img src={process.env.PUBLIC_URL + '/img/port2.jpg'} alt="portfolio image14" className="img-responsive" />
                                                <div className="overlay">
                                                    <h2>Project Two</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolores, velit. Accusantium mollitia obcaecati quos.</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-6 col-xs-12 no-pad">
                                    <div id="inline-popups-3">
                                        <a href="#test-popup-3" data-effect="mfp-zoom-out">
                                            <div className="hovereffect">

                                                <img src={process.env.PUBLIC_URL + '/img/port3.jpg'} alt="portfolio image12" className="img-responsive" />
                                                <div className="overlay">
                                                    <h2>Project Three</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolores, velit. Accusantium mollitia obcaecati quos.</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-6 col-xs-12 no-pad">
                                    <div id="inline-popups-4">
                                        <a href="#test-popup-4" data-effect="mfp-zoom-out">
                                            <div className="hovereffect">

                                                <img src={process.env.PUBLIC_URL + '/img/port4.jpg'} alt="portfolio image8" className="img-responsive" />
                                                <div className="overlay">
                                                    <h2>Project Four</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolores, velit. Accusantium mollitia obcaecati quos.</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-6 col-xs-12 no-pad">
                                    <div id="inline-popups-5">
                                        <a href="#test-popup-5" data-effect="mfp-zoom-out">
                                            <div className="hovereffect">

                                                <img src={process.env.PUBLIC_URL + '/img/port5.jpg'} alt="portfolio image6" className="img-responsive" />
                                                <div className="overlay">
                                                    <h2>Project Five</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolores, velit. Accusantium mollitia obcaecati quos.</p>
                                                </div>

                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-6 col-xs-12 no-pad">
                                    <div id="inline-popups-6">
                                        <a href="#test-popup-6" data-effect="mfp-zoom-out">
                                            <div className="hovereffect">
                                                <img src={process.env.PUBLIC_URL + '/img/port6.jpg'} alt="portfolio image2" className="img-responsive" />
                                                <div className="overlay">
                                                    <h2>Project Six</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolores, velit. Accusantium mollitia obcaecati quos.</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div> */}

                            </div>

                        </div>


                    </div>
                </div>


            </>
        );
    }
}

export default portfolio;