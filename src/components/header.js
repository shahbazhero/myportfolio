import React, { Component } from 'react';
import ScrollspyNav from "react-scrollspy-nav";

class Header extends Component {
    constructor(props) {
        super(props);
        this.navToggle = this.navToggle.bind(this);
      }
    state = {
        activeClass: '', // defaoult state for Change header on scroll
        activeList: false, // defaoult state for Header active list on click
        toggleNav: false,
        navlistarry: [
            { id: 1, name: 'home', class: '' },
            { id: 2, name: 'about', class: '' },
            { id: 3, name: 'portfolio', class: '' },
            { id: 4, name: 'testimonial', class: '' },
            { id: 5, name: 'contact', class: '' }
        ],
        initialData: [
            { id: 1, name: 'home', class: '' },
            { id: 2, name: 'about', class: '' },
            { id: 3, name: 'portfolio', class: '' },
            { id: 4, name: 'testimonial', class: '' },
            { id: 5, name: 'contact', class: '' }
        ]
    };


    // Change header on scroll 
    componentDidMount() {
        window.addEventListener('scroll', () => {
            let activeClass = 'sticky_navigation';
            if (window.scrollY === 0) {
                activeClass = 'top';
            }
            this.setState({ activeClass });
        });
    }
    navToggle(){
        console.log("hiihih");
        this.setState({
            toggleNav: !this.state.toggleNav
          });
    }
    // End of change header on scroll 

    // Header active list on click

    // HeaderActiveList(e, item) {
    //     console.log("hihi", e.target, item);
    //     var tempNavlistarry = JSON.parse(JSON.stringify(this.state.initialData));
    //     tempNavlistarry.forEach(element => {
    //         if (item === element.id) {
    //             element.class = "active"
    //         }
    //     });
    //     this.setState({
    //         navlistarry: tempNavlistarry
    //     })


    // }

    render() {
        const { navlistarry } = this.state

        return (
            <>
                <header className={`nav-area navbar-fixed-top fixed-top ${this.state.activeClass}`}>
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12">
                                <div className="main-menu">
                                    <div className="navbar navbar-cus">
                                        <div className="navbar-header">
                                            <a href="index.html" className="navbar-brand"><span className="logo">earnTo</span></a>
                                            <button type="button" onClick={ this.navToggle} onBlur={ this.navToggle} className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                                <span className="sr-only">Toggle navigation</span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </button>
                                        </div>

                                        <div className= { this.state.toggleNav ? " navbar-collapse collapse show" : " navbar-collapse collapse" }>
                                            <nav>


                                                {/* <Scrollspy className="nav navbar-nav navbar-right" items={['home', 'about', 'portfolio', 'testimonial', 'contact']} currentClassName="is-current">
                                                    {navlistarry.map((item, key) =>
                                                        <li key={item.id} className={item.className} ><a className="smooth-menu" href={`#${item.name}`}>{item.name}</a></li>

                                                    )}
                                                </Scrollspy> */}
                                                <ul className="nav navbar-nav navbar-right">
                                                <ScrollspyNav
                                                    scrollTargetIds={["home", "about", "portfolio", "testimonial", "contact"]}
                                                    scrollDuration= "100"
                                                    activeNavClass="is-current"
                                                >
                                                    {navlistarry.map((item, key) =>
                                                        <li key={item.id} className={item.className} ><a className="smooth-menu" href={`#${item.name}`}>{item.name}</a></li>

                                                    )}
                                                </ScrollspyNav>
                                                </ul>

                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}

export default Header;
