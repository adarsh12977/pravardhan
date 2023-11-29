import React, {useState} from 'react'
import Header from '../components/Layouts/Header'

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:5000/api/user/register', {
      method: 'POST',
      body: JSON.stringify({name,email,password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      alert('registration successful');
    } else {
      alert('registration failed');
    }
  }

  return (
    <div>
      <div>
      <Header/>
      <h2 className="login-head" onSubmit={register}>Register Form</h2>
        <form className="main-login">
        <div className="login-form mb-3">
    <label for="exampleInputName1" className="form-label">Name</label>
    <input type="string" value={name} onChange={ev => setName(ev.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="login-form mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={email} onChange={ev => setEmail(ev.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="login-form mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={password} onChange={ev => setPassword(ev.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    </div>
  )
}

export default Register