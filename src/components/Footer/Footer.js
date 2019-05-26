import React, {Component} from 'react';
import styles from './Footer.module.scss';
import LocalizedStrings from 'react-localization';
import Language from "../../context/Language";

const localization = new LocalizedStrings({
   bn: {
      license1: 'এই প্রজেক্টটি লাইন্সেস করা হয়েছে ',
      license2: 'ক্রিয়েটিভ কমনস অ্যাট্রিবিউশন-শেয়ার অ্যালাইক ৪.০ ইন্টারন্যাশনাল লাইসেন্সের অধীনে।',
   },
   en: {
      license1: 'This project is licensed under a ',
      license2: 'Creative Commons Attribution-ShareAlike 4.0 International License.',

   },

});


class Footer extends Component {
   static contextType = Language;


   render() {
      localization.setLanguage(this.context.lang);

      return (
          <div className={styles.footer}>
             <div className="container-c">
                <div className="row">
                   <div className={`col ${styles.mainDiv}`}>
                      <p>Made with &nbsp;<i
                          className="fas fa-heart"/>&nbsp; from <strong>Bangladesh</strong>. &nbsp;Copyleft <span
                          className={styles.copyLeft}>©</span> 2018.</p>

                      <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
                         <img alt="Creative Commons License" className="mr-2"
                              src="https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg"/>
                      </a>
                      {localization.license1}
                      <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
                         {localization.license2}
                      </a>
                   </div>
                </div>
             </div>
          </div>
      );
   }
}

export default Footer;