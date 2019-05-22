import React, {Component} from 'react';
import styles from './NavBar.module.scss';
import logo from '../../assets/logo.svg';
import {Spring, config} from 'react-spring/renderprops';
import LocalizedStrings from "react-localization";
import Language from "../../context/Language";
import {withRouter} from 'react-router-dom';
import ResponsiveNav from "./ResponsiveNav/ResponsiveNav";
import Backdrop from "../UI/Backdrop/Backdrop";


const localization = new LocalizedStrings({
   bn: {
      first: 'হোম',
      second: 'ফন্টলিস্ট',
      third: 'ডকুমেন্টেশন',
      fourth: 'আমাদের সম্পর্কে',
   }
   , en: {
      first: 'Home',
      second: 'Fonts List',
      third: 'Docs',
      fourth: 'About Us',
   },

});

class Navbar extends Component {
   state = {
      showNav: false,
   };

   static contextType = Language;


   toggleNavMobile = () => {
      this.setState({
         showNav: !this.state.showNav,
      })
   };

   setLang = (e, lang) => {
      e.preventDefault();
      console.log(`[Navbar.js] Changing Language to ${lang}`);


      let paramsToAppendLangChange = (this.props.match.params.q !== undefined ? this.props.match.params.q : "");
      this.props.history.push(`/${lang}/${paramsToAppendLangChange}`);

      this.context.changeLang(lang);
   };

   render() {
      console.log(`[Navbar.js] Show Responsive Menu ${this.state.showNav}`);


      localization.setLanguage(this.context.lang);
      let langForNavIsEN = this.props.match.path.substr(1, 2) === 'en';
      let paramsToAppendLangChange = (this.props.match.params.q !== undefined ? this.props.match.params.q : "");

      return (
          <div className="position-relative">
             {/*Language Nav*/}
             <Spring from={{transform: 'translate3d(0px, -15px, 0px)'}}
                     to={{transform: 'translate3d(0px, 0px, 0px)'}}
                     config={config.gentle}>
                {props => (
                    <ul style={props} className={"d-flex text-light list-unstyled " + styles.localizationBar}>
                       <i className="fas fa-language"/>
                       <li className="nav-links">
                          <a className={langForNavIsEN ? 'text-light' : 'text-muted'}
                             onClick={(e) => this.setLang(e, 'en')}
                             href={"\\en\\" + paramsToAppendLangChange}>ENG</a>
                       </li>
                       <li className="nav-links">
                          <a className={langForNavIsEN ? 'text-muted' : 'text-light'}
                             onClick={(e) => this.setLang(e, 'bn')}
                             href={"\\bn\\" + paramsToAppendLangChange}>বাংলা</a>
                       </li>
                    </ul>
                )}
             </Spring>


             {/*Normal Nav*/}
             <Spring from={{transform: 'translate3d(0px, -20px, 0px)'}}
                     to={{transform: 'translate3d(0px, 0px, 0px)'}}
                     config={config.gentle}>
                {props => (
                    <nav style={props} className={"navbar navbar-expand navbar-dark bg-transparent"}>
                       <div className={styles.container}>
                          <a className="navbar-brand"
                             onClick={(e) => {
                                e.preventDefault();
                                this.props.history.push(`${langForNavIsEN ? "/en" : "/bn"}`);
                             }}
                             href={langForNavIsEN ? "/en" : "/bn"}>
                             <img className={styles.navlogo} src={logo}/>
                          </a>

                          <div className={"ml-auto " + styles.navList}>
                             <i onClick={this.toggleNavMobile} className="fas fa-bars"/>

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
                                <li className="nav-item">
                                   <a className="nav-link"
                                      href="/about">
                                      {localization.fourth}
                                   </a>
                                </li>
                             </ul>
                          </div>
                       </div>
                    </nav>
                )}
             </Spring>

             {/*Responsive Nav*/}
             <Backdrop click={this.toggleNavMobile} show={this.state.showNav}/>
             <ResponsiveNav toggleNavMobile={this.toggleNavMobile} show={this.state.showNav}
                            localization={localization}
                            setLang={this.setLang}/>
          </div>
      );
   }
}


export default withRouter(Navbar);