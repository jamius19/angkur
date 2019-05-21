import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {getCookie, setCookie} from "../utility/UtilityFunc";
import BnRouter from "../utility/Language Router/BN Router/BNRouter";
import ENRouter from "../utility/Language Router/EN Router/ENRouter";
import Language from "../context/Language";


class App extends Component {


   render() {
      return (
          <Router>
             <div>
                <Switch>
                   <Route path="/en/:q*/" component={
                      props => {
                         setCookie('lang', 'en');
                         return (
                             <Language.Provider value={'en'}>
                                <ENRouter/>
                             </Language.Provider>
                         );
                      }
                   }/>

                   <Route path="/bn/:q*/" component={
                      props => {
                         setCookie('lang', 'bn');
                         return (
                             <Language.Provider value={'bn'}>
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
