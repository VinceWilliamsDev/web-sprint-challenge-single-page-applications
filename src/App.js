import React from "react";
import Form from './Form'
import Home from './Home'
import Pizza from './Pizza.js'
import {Route, Switch} from 'react-router-dom'

const App = () => {



  return (
    <div>
      <Switch>
        <Route>
          <Pizza />
        </Route>

        <Route>
          <Form />
        </Route>

        <Route>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
