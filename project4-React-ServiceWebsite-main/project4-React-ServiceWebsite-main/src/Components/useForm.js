import{useState, useEffect} from 'react';
import validation from './valdition';
import auth from "./auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { getElementError } from '@testing-library/react';



 const useForm = (valdition, props) => {
  
  const [values, setValues] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:''
  })
  const [vallog, setVallog] = useState({
    emails:'',
    passwords:''
  })

  const [errors, setErrors] =useState({})

  const handleChange = e => {
    const {name, value} = e.target;
    setValues({
      ...values, [name]: value
    })
    setVallog({
      ...vallog, [name]: value
    })
    
  }
  const handleSubmit = e =>{
    e.preventDefault();
    
    setErrors(validation(values));
    if (document.getElementById('checked').checked) {

      sessionStorage.setItem('firstName', (values.firstName))
      sessionStorage.setItem('lastName', (values.lastName))
      sessionStorage.setItem('email', (values.email))
      sessionStorage.setItem('password', (values.password))
      setValues({
      firstName:'',
      lastName:'',
      email:'',
      password:''
    })
    }else {
      alert("pls agree")
    }
  }
  

  const submitLogin = e => {
 
    
    e.preventDefault();
    
    
    
    setErrors(validation(values));
    
    //  date == values.emails && localStorage.getItem('password') == values.passwords ?  checkok(): checknot() 
  
  }
  return {handleChange, values, handleSubmit, errors , vallog, submitLogin}
}

export default useForm
