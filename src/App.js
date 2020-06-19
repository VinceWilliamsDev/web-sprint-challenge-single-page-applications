import React, { useState } from "react";
import Pizza from './Pizza.js'
import Home from './Home.js'
import {Route, Switch, Link} from 'react-router-dom'
import axios from 'axios'
import * as Yup from 'yup'


const App = () => {

  
  const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(3, "Name must be at least 3 characters long.")
        .required("Name is Required")
  })

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
  const [errors, setErrors] = useState({name: ''});

  
  const onChange = event => {
    const name= event.target.name
    const value = event.target.value
    console.log(name, value)

    setFormValues({...formValues, [name]: value})
  }

  const onNameChange = event => {
    const name= event.target.name
    const value = event.target.value
    console.log(name, value)

    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setErrors({...errors, [name]: ''})
      })
      .catch(err => {
        // console.log(err)
        setErrors({...errors, [name]: err.errors[0]})
      })

    setFormValues({...formValues, [name]: value})
  }

  const onChangeCheckbox = event => {
      const name = event.target.name
      const checked = event.target.checked
      console.log(name, checked)
      setFormValues({ ...formValues, [name]: checked})
  }

  const onSubmit = event => {
    event.preventDefault()
    axios.post('https://reqres.in/api/users', formValues)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
}

  return (
    <div>
      <header>
        <h1>Lambda Eats</h1>
        <Link to='/' >Home</Link>
      </header>
      <Switch>

        <Route path ='/order'>
          <Pizza 
            formValues={formValues}  
            onSubmit={onSubmit} 
            onChange={onChange}
            onChangeCheckbox={onChangeCheckbox}
            errors={errors}
            onNameChange={onNameChange}
            />            
        </Route>

        <Route path='/'>
          <Home />
        </Route>

      </Switch>
    </div>
  );
};
export default App;
