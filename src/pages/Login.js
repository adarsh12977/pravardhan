import React,{useContext,useState} from 'react'
import Header from '../components/Layouts/Header'
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../UserContext';

const Login = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:5000/api/user/login', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div>
      <Header/>
      <h2 className="login-head">Login Form</h2>
        <form onSubmit={login} className="main-login">
  <div className="login-form mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="login-form mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login