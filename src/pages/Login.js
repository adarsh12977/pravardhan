import React from 'react'
import Header from '../components/Layouts/Header'

const Login = () => {
  return (
    <div>
      <Header/>
      <h2 className="login-head">Login Form</h2>
        <form className="main-login">
  <div className="login-form mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="login-form mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login