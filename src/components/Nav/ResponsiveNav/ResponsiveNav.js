import React, {Component} from 'react';
import styles from './ResponsiveNav.module.scss';
import logo from '../../../assets/logo.svg';

import {Spring, config, Transition} from "react-spring/renderprops";
import {withRouter} from "react-router-dom";

class ResponsiveNav extends Component {

   render() {
      let localization = this.props.localization;

      localization.setLanguage(this.props.match.path.substr(1, 2));
      let langForNavIsEN = this.props.match.path.substr(1, 2) === 'en';
      let paramsToAppendLangChange = (this.props.match.params.q !== undefined ? this.props.match.params.q : "");

      return (
          <Transition
              items={this.props.show}
              from={{opacity: 0, transform: 'translate3d(0px, -80px, 0px)'}}
              enter={{opacity: 1, transform: 'translate3d(0px, 0px, 0px)'}}
              leave={{opacity: 0, transform: 'translate3d(0px, +80px, 0px)'}}
              config={config.wobbly}>
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
                                <a className="text-light" href="/">{localization.first}</a>
                             </li>
                             <li className="">
                                <i className="fas fa-th-list fa-fw"/>
                                <a className="text-light" href="/about">{localization.second}</a>
                             </li>
                             <li className="">
                                <i className="fas fa-question-circle fa-fw"/>
                                <a className="text-light" href="/about">{localization.third}</a>
                             </li>
                             <li className="">
                                <i className="fas fa-user-friends fa-fw"/>
                                <a className="text-light" href="/about">{localization.fourth}</a>
                             </li>
                          </ul>
                          <hr style={{backgroundColor: '#404040'}}/>

                          {/*Language Nav*/}
                          <ul className={"d-flex text-light list-unstyled " + styles.localizationBarResponsive}>
                             <i className="fas fa-language"/>
                             <li className="nav-links">
                                <a className={langForNavIsEN ? 'text-light' : 'text-muted'}
                                   onClick={(e) => this.props.setLang(e, 'en')}
                                   href={"\\en\\" + paramsToAppendLangChange}>ENG</a>
                             </li>
                             <li className="nav-links">
                                <a className={langForNavIsEN ? 'text-muted' : 'text-light'}
                                   onClick={(e) => this.props.setLang(e, 'bn')}
                                   href={"\\bn\\" + paramsToAppendLangChange}>বাংলা</a>
                             </li>
                          </ul>

                       </nav>
                    </div>
                 </div>


             ))}
          </Transition>
      );
   }
}


export default withRouter(ResponsiveNav);