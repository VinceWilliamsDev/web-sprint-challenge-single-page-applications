import React, { useState } from "react";
import Pizza from './Pizza.js'
import Home from './Home.js'
import Confirmation from './Confirmation.js'
import {Route, Switch, Link} from 'react-router-dom'

const App = () => {

    //initial values for the form fields
    const initialFormValues = {
      name: '',
      size: '',
      pepperoni: false,
      sausage: false,
      mushrooms: false,
      olives: false,
      instructions: ''
  }

  const [formValues, setFormValues] = useState(initialFormValues)

  return (
    <div>
      <header>
        <h1>Lambda Eats</h1>
        <Link to='/' >Home</Link>
      </header>
      <Switch>
        <Route path='/order/:id'>
          <Confirmation />
        </Route>

        <Route path ='/order'>
          <Pizza />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
