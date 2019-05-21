import React from 'react';
import styles from './Backdrop.module.scss';
import {config} from "react-spring";
import {Transition} from "react-spring/renderprops";

const Backdrop = (props) => {
   let clickFunc = props.click;

   return (
       <Transition
           items={props.show}
           from={{opacity: 0}}
           enter={{opacity: 1}}
           leave={{opacity: 0}}
           config={config.gentle}>
          {item => item && (props => (
              <div style={props} onClick={clickFunc} className={styles.backdrop}/>
          ))}
       </Transition>
   );
};

export default Backdrop;