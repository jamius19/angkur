import React, {Component} from 'react';
import styles from './FontPage.module.scss';
import Navbar from "../../components/Nav/Navbar";
import LocalizedStrings from 'react-localization';
import {numToBangla} from "../../utility/UtilityFunc";

const localization = new LocalizedStrings({
   bn: {
      chars: 'বর্ণমালা',
   },
   en: {
      chars: 'Characters',
   },
});

class FontPage extends Component {
   render() {
      return (
          <div>
             <Navbar showBG/>
             <div className="container-c mt-5">
                <div className="row">
                   <div className="col-sm">
                      <h1 className={styles.fontTitle}>SolaimanLipi</h1>
                      <hr className={styles.divider}/>
                   </div>
                </div>

                <div className="row">
                   <div className="col-sm">
                      <div className={styles.fontDetails}>
                         <div className={styles.styleDetails}>
                            <i className="fas fa-pen-nib"/>
                            <h5>{'Serif'}</h5>
                         </div>

                         <h5>{'3 Styles'}</h5>
                         <h5>{`Designed by Jamius Siam`}</h5>
                      </div>


                      <div className={styles.fontPreview}>
                         <h2>Characters</h2>
                         <hr className={styles.divider}/>

                         <p>
                            অ আ ই ঈ উ ঊ ঋ এ ঐ ও ঔ
                         </p>
                         <p>
                            ক খ গ ঘ ঙ চ ছ জ ঝ ঞ ট ঠ ড ঢ ণ ত থ দ ধ ন প ফ ব ভ ম য র ল শ ষ স হ ড় ঢ় য় ৎ ং ঃ ঁ
                         </p>
                         <p>
                            ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯ ০
                         </p>
                         <p>
                            ? ! । - ;
                         </p>


                      </div>

                   </div>
                </div>
             </div>
          </div>
      );
   }
}

export default FontPage;