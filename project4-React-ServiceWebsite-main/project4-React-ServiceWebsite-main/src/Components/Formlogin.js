import React,{useState} from 'react'
import '../Styles/StyleForm.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormRegister from './FormRegister';
import useForm from './useForm';
import auth from "./auth";


function FormLogin(props) {
  
  const { handleChange, handleSubmit, errors, vallog, values, submitLogin} = useForm()

  

   function login(params) {
     const ok = () => {auth.login(() => {props.history.push("/profile") ; }); }
      let date= window.localStorage.getItem('email');
      date == values.emails && localStorage.getItem('password') == values.passwords ? ok() : alert("try agin")

     
  }

  return (
    <Router>
      <switch>
        
          
           <div className="container-pr">
      
          <section className="container-ch">
            <div className="form-background">
            <i><img src="./images/1.svg" width="100%" height="100%" alt=""/></i>
            </div>
            <div className="form-count">
              <div className="form-box">
                <h2>login</h2>
                <form  className="container-form" onSubmit={submitLogin}
                >
                  <div className="input-user form-style-input">
                    <span>Email: </span>
                    <input 
                    type="text" 
                    name='emails' 
                    value={vallog.emails} 
                    onChange={handleChange}
                    />
                    {errors.emails && <p className="error">{errors.emails}</p>}
                  </div>
                  <div className="input-password form-style-input">
                    <span>Password: </span>
                    <input 
                    type="password" 
                    name='passwords' 
                    value={vallog.passwords} 
                    onChange={handleChange}
                    />
                    {errors.passwords && <p className="error">{errors.passwords}</p>}

                  </div>
                  <div className="remember-me ">
                    <label> <input type="checkbox"/>Remember me</label>
                  </div>
                  
                  <div className="input-log form-style-input">
                  <button 
                  type="submit" 
                   onClick={ login}
                    >
                    Login
                  </button>
                    
                  </div>
                  <div className="input-dont">
                    <p>Don't have account? <Link onClick={ () => {auth.login(() => {props.history.push("/register") ; }); } } >register</Link> </p>
                  </div>

                </form>
              </div>
            </div>
          </section>
        
      </div>
    </switch>
  </Router>
  )
}

 export default FormLogin
