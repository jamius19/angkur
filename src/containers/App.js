import React from 'react';
import Home from "../pages/Home/Home";
import Language from '../context/Language';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {getCookie} from "../utility/UtilityFunc";

function App() {


   return (
       <Router>
          <div>
             <Switch>
                <Route exact path="/" component={
                   props => {
                      console.log(getCookie('lang'));


                      if (!getCookie('lang')) {
                         document.cookie = "lang=bn; expires=Thu, 18 Dec 2020 12:00:00 UTC";
                      }

                      return (
                          <Language.Provider value={getCookie('lang')}>
                             <Home/>
                          </Language.Provider>
                      );
                   }
                }/>

                <Route exact path="/:id" component={
                   props => {
                      document.cookie = `lang=${props.match.params.id}; expires=Thu, 18 Dec 2020 12:00:00 UTC`;
                      console.log(getCookie('lang'));

                      return (
                          <Language.Provider value={props.match.params.id}>
                             <Home/>
                          </Language.Provider>
                      );
                   }
                }/>
             </Switch>
          </div>
       </Router>
   );
}

//document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";

export default App;
