import React from "react";
import Form from './Form'
import Home from './Home'
import Pizza from './Pizza.js'
import {Route, Switch, Link} from 'react-router-dom'

const App = () => {



  return (
    <div>
      <header>
        <h1>Lambda Eats</h1>
        <Link to='/' >Home</Link>
      </header>
      <Switch>
        <Route path='/order/:id'>
          <Pizza />
        </Route>

        <Route path ='/order'>
          <Form />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
