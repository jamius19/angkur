import React, {Component} from 'react';
import styles from './NavBar.module.scss';
import logo from '../../assets/logo.svg';
import {Spring, config} from 'react-spring/renderprops';
import LocalizedStrings from "react-localization";
import Language from "../../context/Language";
import {NavLink} from 'react-router-dom';


const localization = new LocalizedStrings({
   en: {
      first: 'Home',
      second: 'Font Collection',
      third: 'About Us',
   },
   bn: {
      first: 'হোম',
      second: 'ফন্ট কালেকশান',
      third: 'আমাদের সম্পর্কে',
   }
});

class Navbar extends Component {

   static contextType = Language;


   render() {

      localization.setLanguage(this.context);


      return (
          <div className="position-relative">
             <ul className={"d-flex text-light list-unstyled " + styles.localizationBar}>
                <i className="fas fa-language"/>
                <li className="nav-links">
                   <a className="text-light" href="\en">EN</a>
                </li>
                <li className="nav-links">
                   <a className="text-muted" href="\bn">বাংলা</a>
                </li>
             </ul>

             <Spring from={{transform: 'translate3d(0px, -20px, 0px)'}}
                     to={{transform: 'translate3d(0px, 0px, 0px)'}}
                     config={config.gentle}>
                {props => (
                    <nav style={props} className={"navbar navbar-expand navbar-dark bg-transparent"}>
                       <div className={styles.container}>
                          <a className="navbar-brand" href="#">
                             <img className={styles.navlogo} src={logo}/>
                          </a>

                          <div className={"ml-auto " + styles.navList}>
                             <i className="fas fa-bars"/>

                             <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                   <a className="nav-link" href="/">{localization.first}</a>
                                </li>
                                <li className="nav-item">
                                   <a className="nav-link" href="/about">{localization.second}</a>
                                </li>
                                <li className="nav-item">
                                   <a className="nav-link" href="/about">{localization.third}</a>
                                </li>
                             </ul>
                          </div>
                       </div>
                    </nav>
                )}
             </Spring>
          </div>

      );
   }
}

/*
<Spring from={{opacity: 0, transform: 'translate3d(0px, +20px, 0px)'}}
        to={{opacity: 1, transform: 'translate3d(0px, 0px, 0px)'}}
        config={config.gentle}>
   {props => ()}
</Spring>
*/

export default Navbar;