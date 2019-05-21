import React, {Component} from 'react';
import Navbar from "../../components/Nav/Navbar";
import styles from './Home.module.scss';
import {Spring, config} from 'react-spring/renderprops';

class Home extends Component {
   render() {
      return (
          <div>
             <header className={"pt-4 " + styles.HeroBg}>
                <Navbar/>
                <Spring from={{opacity: 0, transform: 'translate3d(0px, +20px, 0px)'}}
                        to={{opacity: 1, transform: 'translate3d(0px, 0px, 0px)'}}
                        config={config.gentle}>
                   {props => (
                       <div style={props} className="container">
                          <div className="d-flex flex-column align-items-center text-center">
                             <h3 className={"text-light " + styles.heroTitle}>
                                আপনার ওয়েবসাইটে বাংলা ফন্ট অ্যাড করুন
                                <br/>
                                সহজে এবং বিনামূল্যে
                             </h3>
                             <div className={"d-flex flex-column flex-lg-row " + styles.coaButtons}>
                                <button className={"cbtn cbtn-orange " + styles.cbtn}>ফন্টগুলো দেখুন</button>
                                <button className="cbtn cbtn-outline-orange">আরো জানুন</button>
                             </div>
                          </div>
                       </div>
                   )}
                </Spring>
             </header>
          </div>
      );
   }
}

/*<Spring from={{opacity: 0, transform: 'translate3d(0px, -20px, 0px)'}}
                        to={{opacity: 1, transform: 'translate3d(0px, 0px, 0px)'}}
                        config={config.gentle}>
                   {props => ()}
                </Spring>*/

export default Home;