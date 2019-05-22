import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {getCookie, setCookie} from "../utility/UtilityFunc";
import BnRouter from "../utility/Language Router/BN Router/BNRouter";
import ENRouter from "../utility/Language Router/EN Router/ENRouter";
import Language from "../context/Language";
import LocalizedStrings from 'react-localization';


const lang = new LocalizedStrings({
   bn: {
      title: 'অংকুর | বাংলা ওয়েব ফন্ট'
   }, en: {
      title: 'Angkur | Bangla Web Font'
   },

});


class App extends Component {


   constructor(props) {
      super(props);
      let lang = getCookie('lang') ? getCookie('lang') : 'bn';
      this.state = {
         lang: lang
      }
   }


   changeLang = (lang) => {
      console.log(`[App.js] Current Language is ${this.state.lang}`);

      this.setState({
         lang: lang
      });
   };


   render() {
      return (
          <Router>
             <div>
                <Switch>
                   <Route path="/en/:q*/" component={
                      props => {
                         lang.setLanguage('en');
                         document.title = lang.title;

                         setCookie('lang', 'en');
                         return (
                             <Language.Provider value={{lang: 'en', changeLang: this.changeLang}}>
                                <ENRouter/>
                             </Language.Provider>
                         );
                      }
                   }/>

                   <Route path="/bn/:q*/" component={
                      props => {
                         lang.setLanguage('bn');
                         document.title = lang.title;

                         setCookie('lang', 'bn');
                         return (
                             <Language.Provider value={{lang: 'bn', changeLang: this.changeLang}}>
                                <BnRouter/>
                             </Language.Provider>
                         );
                      }
                   }/>

                   <Route path="/:q(.*)" component={
                      props => {
                         console.log('nothing detected');
                         let lang = getCookie('lang') ? getCookie('lang') : 'bn';
                         return <Redirect to={`/${lang}${props.location.pathname}`}/>;
                      }
                   }/>
                </Switch>
             </div>
          </Router>
      );
   }
}

export default App;
