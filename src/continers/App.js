import { Wrapper } from './../common/StyledComponents';
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Authentication from './Authentication';
import TopNav from '../components/TopNav';

class App extends Component {

  // local state
  state = {
    counter : 0 
  }

  // accepts a negative or positve number as argument
  // counter will be increment or decremented if num is positve or negative respectively
  handleIncrementCounter = num => this.setState(prev=>({counter: prev.counter + num}));

  render() {
    return (
      <Router>
          <div>
            <TopNav />
            <Switch>
              <Route path="/auth" component={Authentication} />
              <Route path="/" render={()=><h1>Welcome!</h1>} />
            </Switch>
          </div>
      </Router>
    );
  }
}


export default App;
