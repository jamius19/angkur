import React, {Component} from 'react';
import styles from './ResponsiveNav.module.scss';
import logo from '../../../assets/angkur_logo.svg';

import {Spring, config, Transition} from "react-spring/renderprops";
import {Link, withRouter} from "react-router-dom";

class ResponsiveNav extends Component {

   render() {
      let localization = this.props.localization;

      localization.setLanguage(this.props.match.path.substr(1, 2));
      let langForNavIsEN = this.props.match.path.substr(1, 2) === 'en';
      let paramsToAppendLangChange = (this.props.match.url.substr(4, this.props.match.url.length) ?
          this.props.match.url.substr(4, this.props.match.url.length) : "");

      return (
          <Transition
              items={this.props.show}
              from={{opacity: 0, transform: 'translate3d(0px, -80px, 0px)'}}
              enter={{opacity: 1, transform: 'translate3d(0px, 0px, 0px)'}}
              leave={{opacity: 0, transform: 'translate3d(0px, +80px, 0px)'}}
              config={config.stiff}>
             {item => item && (props => (


                 <div style={props} className={styles.responsiveNavContainer}>
                    <div className={styles.responsiveNav}>
                       <a href={langForNavIsEN ? "/en" : "/bn"}>
                          <img className={styles.navLogo} src={logo}/>
                       </a>


                       <nav>


                          <ul className={"text-light " + styles.navBar}>
                             <li className="">
                                <i className="fas fa-home fa-fw"/>
                                <Link
                                    className={`${this.props.activeStatus[0] ? ' text-light' : 'textSubMuted'} link-unstyle text-light`}
                                    to={langForNavIsEN ? "/en" : "/bn"}>{localization.first}</Link>
                             </li>
                             <li className="">
                                <i className="fas fa-th-list fa-fw"/>
                                <Link
                                    className={`${this.props.activeStatus[1] ? ' text-light' : 'textSubMuted'} link-unstyle text-light`}
                                    to={`/${langForNavIsEN ? 'en' : 'bn'}/fonts`}>{localization.second}</Link>
                             </li>
                             <li className="">
                                <i className="fas fa-question-circle fa-fw"/>
                                <Link
                                    className={`${this.props.activeStatus[2] ? ' text-light' : 'textSubMuted'} link-unstyle text-light`}
                                    to={`/${langForNavIsEN ? 'en' : 'bn'}/docs`}>{localization.third}</Link>
                             </li>
                             <li className="">
                                <i className="fas fa-user-friends fa-fw"/>
                                <Link
                                    className={`${this.props.activeStatus[3] ? ' text-light' : 'textSubMuted'} link-unstyle text-light`}
                                    to={`/${langForNavIsEN ? 'en' : 'bn'}/about`}>{localization.fourth}</Link>
                             </li>
                          </ul>


                          <hr style={{backgroundColor: '#404040'}}/>


                          {/*Language Nav*/}
                          <div className={styles.localizationBarResponsive}>
                             <ul className={"d-flex text-light list-unstyled"}>
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

                             <div className={styles.star}>
                                <i className="fab fa-github"/>
                                <a className="link-unstyle text-light"
                                   href="https://github.com/nokshaia/angkur" target="_blank"
                                   rel="noreferrer noopener">
                                   Star Angkur
                                </a>
                             </div>
                          </div>

                       </nav>
                    </div>
                 </div>


             ))}
          </Transition>
      );
   }
}


export default withRouter(ResponsiveNav);