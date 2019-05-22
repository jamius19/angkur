import React, {Component} from 'react';
import {Switch, Route, withRouter} from "react-router-dom";
import Home from "../../../pages/Home/Home";

class EnRouter extends Component {
   render() {
      return (
          <div>


             <Switch>
                <Route exact path={['/en', '/en/']} component={props => <Home/>}/>

             </Switch>


          </div>
      );
   }
}

export default withRouter(EnRouter);