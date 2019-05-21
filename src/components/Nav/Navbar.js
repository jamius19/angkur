import React, {Component} from 'react';
import classes from './NavBar.module.scss';
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
          <div>
             <Spring from={{transform: 'translate3d(0px, -20px, 0px)'}}
                     to={{transform: 'translate3d(0px, 0px, 0px)'}}
                     config={config.gentle}>
                {props => (
                    <nav style={props} className={"navbar navbar-expand navbar-dark bg-transparent"}>
                       <div className={classes.container}>
                          <a className="navbar-brand" href="#">
                             <img className={classes.navlogo} src={logo}/>
                          </a>

                          <div className={"ml-auto " + classes.navList}>
                             <i className="fas fa-bars"/>

                             <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                   <NavLink className="nav-link" to="/">{localization.first}</NavLink>
                                </li>
                                <li className="nav-item">
                                   <NavLink className="nav-link" to="/about">{localization.second}</NavLink>
                                </li>
                                <li className="nav-item">
                                   <NavLink className="nav-link" to="/about">{localization.third}</NavLink>
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