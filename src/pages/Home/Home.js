import React, {Component} from 'react';
import Navbar from "../../components/Nav/Navbar";
import styles from './Home.module.scss';
import {Transition, Spring, config} from 'react-spring/renderprops';
import LocalizedStrings from 'react-localization';
import Language from '../../context/Language';


const localization = new LocalizedStrings({
   en: {
      HeroTitle: 'Add Bangla Fonts to your Website',
      HeroSubTitle: 'It\'s Free and Easy',
      CalltoActionButton: 'Browse Fonts',
      SecondaryButton: 'Learn More',
   },
   bn: {
      HeroTitle: 'আপনার ওয়েবসাইটে বাংলা ফন্ট অ্যাড করুন',
      HeroSubTitle: 'সহজে এবং বিনামূল্যে',
      CalltoActionButton: 'ফন্ট দেখুন',
      SecondaryButton: 'আরো জানুন',
   }
});

class Home extends Component {

   static contextType = Language;

   render() {


      localization.setLanguage(this.context);

      return (
          <div>
             <header className={"pt-4 " + styles.HeroBg}>
                <Navbar/>
                <Spring from={{transform: 'translate3d(0px, +20px, 0px)'}}
                        to={{transform: 'translate3d(0px, 0px, 0px)'}}
                        config={config.gentle}>
                   {props => (
                       <div style={props} className="container">
                          <div className="d-flex flex-column align-items-center text-center">
                             <h1 className={"text-light " + styles.heroTitle}>
                                {localization.HeroTitle}
                             </h1>
                             <h2 className={"text-light " + styles.heroSubTitle}>
                                {localization.HeroSubTitle}
                             </h2>
                             <div className={"d-flex flex-column flex-lg-row " + styles.coaButtons}>
                                <button
                                    className={"cbtn cbtn-orange " + styles.cbtn}>{localization.CalltoActionButton}</button>
                                <button className="cbtn cbtn-outline-orange">{localization.SecondaryButton}</button>
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

export default Home;