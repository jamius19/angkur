import React, {Component} from 'react';
import styles from './NavBar.module.scss';
import logo from '../../assets/angkur_logo.svg';
import {Spring, config} from 'react-spring/renderprops';
import LocalizedStrings from "react-localization";
import Language from "../../context/Language";
import {Link, withRouter} from 'react-router-dom';
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
      let showBG = this.props.showBG ? this.props.showBG : false;

      //console.log(this.props);

      localization.setLanguage(this.context.lang);
      let langForNavIsEN = this.context.lang === 'en';
      let paramsToAppendLangChange = (this.props.match.url.substr(4, this.props.match.url.length) ?
          this.props.match.url.substr(4, this.props.match.url.length) : "");

      let url = this.props.match.url;


      let activeStatus = [
         url.search(/en\/?$/) !== -1,
         url.search(/fonts?\/?/) !== -1,
         url.search(/docs?\/?$/) !== -1,
         url.search(/about?\/?$/) !== -1,
      ];


      return (
          <div className={showBG ? styles.navBarBG : ""}>
             <div className={styles.navBar}>
                {/*Language Nav*/}
                <Spring from={{transform: 'translate3d(0px, -15px, 0px)'}}
                        to={{transform: 'translate3d(0px, 0px, 0px)'}}
                        config={config.molasses}>
                   {props => (
                       <ul style={props} className={"d-flex text-light list-unstyled " + styles.localizationBar}>
                          <li>
                             <div className={styles.star}>
                                <i className="fab fa-github"/>
                                <a className="link-unstyle text-light"
                                   href="https://github.com/nokshaia/angkur" target="_blank"
                                   rel="noreferrer noopener">
                                   Star Angkur
                                </a>
                             </div>
                          </li>

                          <i className="fas fa-language"/>

                          <li className="nav-links">
                             <Link className={langForNavIsEN ? 'text-light' : 'text-muted'}
                                 /*onClick={(e) => this.setLang(e, 'en')}*/
                                   to={"/en/" + paramsToAppendLangChange}>ENG</Link>
                          </li>
                          <li className="nav-links">
                             <Link className={langForNavIsEN ? 'text-muted' : 'text-light'}
                                 /*onClick={(e) => this.setLang(e, 'bn')}*/
                                   to={"/bn/" + paramsToAppendLangChange}>বাংলা</Link>
                          </li>
                       </ul>
                   )}
                </Spring>


                {/*Normal Nav*/}
                <Spring from={{transform: 'translate3d(0px, -20px, 0px)'}}
                        to={{transform: 'translate3d(0px, 0px, 0px)'}}
                        config={config.molasses}>
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
                                   <li className={`nav-item${activeStatus[0] ? ' active' : ''}`}>
                                      <Link className="nav-link"
                                            to={langForNavIsEN ? "/en" : "/bn"}>{localization.first}</Link>
                                   </li>
                                   <li className={`nav-item${activeStatus[1] ? ' active' : ''}`}>
                                      <Link className="nav-link"
                                            to={`/${this.context.lang}/fonts`}>{localization.second}</Link>
                                   </li>
                                   <li className={`nav-item${activeStatus[2] ? ' active' : ''}`}>
                                      <Link className="nav-link"
                                            to={`/${this.context.lang}/docs`}>{localization.third}</Link>
                                   </li>
                                   <li className={`nav-item${activeStatus[3] ? ' active' : ''}`}>
                                      <Link className="nav-link" to="/en/about">{localization.fourth}</Link>
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
                               setLang={this.setLang}
                               activeStatus={activeStatus}/>
             </div>
          </div>
      );
   }
}


export default withRouter(Navbar);