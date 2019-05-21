import React, {Component} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import Home from "../../../pages/Home/Home";

class BnRouter extends Component {
   render() {
      return (
          <div>


             <Switch>
                <Route exact path={['/bn', '/bn/']} component={props => <Home/>}/>
             </Switch>


          </div>
      );
   }
}

export default withRouter(BnRouter);