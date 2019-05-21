import React from 'react';
import Home from "../pages/Home/Home";
import Language from '../context/Language';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {getCookie, setCookie} from "../utility/UtilityFunc";

function App() {
   return (
       <Router>
          <div>
             <Switch>
                <Route path="/en/:q*/" component={
                   props => {
                      //document.cookie = `lang=${'en'}; expires=Thu, 18 Dec 2020 12:00:00 UTC`;
                      console.log('en detected');
                      //console.log(props);

                      setCookie('lang', 'en');

                      return (
                          <Language.Provider value={'en'}>
                             <Home/>
                          </Language.Provider>
                      );
                   }
                }/>

                <Route path="/bn/:q*/" component={
                   props => {
                      console.log('bn detected');
                      //document.cookie = `lang=${'bn'}; expires=Thu, 18 Dec 2020 12:00:00 UTC`;
                      //console.log(props);

                      setCookie('lang', 'bn');


                      return (
                          <Language.Provider value={'bn'}>
                             <Home/>
                          </Language.Provider>
                      );
                   }
                }/>

                <Route path="/:q(.*)" component={
                   props => {
                      console.log('nothing detected');
                      //console.log(props);
                      let lang = getCookie('lang') ? getCookie('lang') : 'bn';

                      //return <h1>{lang}</h1>;
                      return <Redirect to={`/${lang}${props.location.pathname}`}/>;
                   }
                }/>
             </Switch>
          </div>
       </Router>
   );
}


//document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";

export default App;
