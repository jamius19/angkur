import React, {Component} from 'react';
import styles from './Docs.module.scss';
import Navbar from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import LocalizedStrings from 'react-localization';
import Language from "../../context/Language";


const localization = new LocalizedStrings({
   bn: {
      title: 'ডকুমেন্টেশন',
      des1: 'অংকুর সকল ফাইল jsDelivr এর মাধ্যমে সার্ভ করে থাকে। এ ব্যাপারে আরো জানতে ' +
          '<a class="link-unstyle text-primary" href="https://www.jsdelivr.com/network" target="_blank">এই লিংকে যান।</a> ' +
          '',
   }, en: {
      title: 'Documentation',
      des1: 'Angkur uses jsDelivr for serving all its files. To learn more ' +
          '<a class="link-unstyle text-primary" href="https://www.jsdelivr.com/network" target="_blank">Click here.</a> ' +
          '',
   },
});


class Docs extends Component {

   static contextType = Language;

   render() {

      localization.setLanguage(this.context.lang);

      let chk = 'learn here <a href="https://google.com">Go heere</a>. Peace.';

      return (
          <div>
             <Navbar showBG/>
             <section className="container-c">
                <div className="row">
                   <div className="col">
                      <h1 className="my-3">{localization.title}</h1>

                      <p className="lead" dangerouslySetInnerHTML={{__html: localization.des1}}/>

                   </div>
                </div>
             </section>
             <Footer/>
          </div>
      );
   }
}

export default Docs;