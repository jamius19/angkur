import React, {Component} from 'react';
import classes from './NavBar.module.scss';
import logo from '../../assets/logo.svg';
import {Spring, config} from 'react-spring/renderprops';


class Navbar extends Component {
   render() {
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
                                <li className="nav-item active">
                                   <a className="nav-link" href="#">হোম</a>
                                </li>
                                <li className="nav-item">
                                   <a className="nav-link" href="#">ফন্ট কালেকশান</a>
                                </li>
                                <li className="nav-item">
                                   <a className="nav-link" href="#">আমাদের সম্পর্কে</a>
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