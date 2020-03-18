import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { simpleAction } from './actions/simpleAction';
import Header from './components/header';
import Banner from './components/banner';
import About from './components/about';
import Portfolio from './components/portfolio';
import Testimonial from './components/testimonial';
import Contact from './components/contact';

class App extends Component {

  // componentDidMount() {
  //   this.props.simpleAction();
  // }

  render() {
    const { simpleData } = this.props;
    console.log("data", simpleData);

    return (
      <>

        <Header />
        <Banner />
        <About />
        <Portfolio />
        <Testimonial />
        <Contact/>

      </>
    );
  }

}
const mapStateToProps = state => {
  console.log("state", state);

  return { simpleData: state.simpleReducer };
};
export default connect(mapStateToProps, { simpleAction })(App);
