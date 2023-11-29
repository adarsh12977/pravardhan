import React from 'react'
import Header from '../components/Layouts/Header';
import { useState } from 'react';
import { UserContext } from '../UserContext';

function calculateHealthScore(wt, ht, symptoms, temp, visited) {
  if (
    wt < 20 ||
    wt > 150 ||
    ht < 100 ||
    ht > 250 ||
    symptoms < 0 ||
    symptoms > 10 ||
    temp < 96 ||
    temp > 110 ||
    visited < 0 ||
    visited > 20
  ) {
    console.log("INVALID INPUT");
    return;
  }

  let points = 0;

  if(wt<40){
    points += 1;
  }
  if(wt>=40 && wt<=60){
    points+=2;
  }
  if(wt>60 && wt<=80){
    points+=3;
  }
  if(wt>80 && wt<=100){
    points+=2;
  }
  if(wt>100){
    points+=1;
  }

  if(ht<150){
    points+=1;
  }
  if(ht>=150 && ht<=170){
    points+=2;
  }
  if(ht>170 && ht<=190){
    points+=3;
  }
  if(ht>190 && ht<=210){
    points+=2;
  }
  if(ht>210){
    points+=1;
  }

  if (temp >= 99 && temp < 100.4) points += 3;
  else if (temp >= 100.4 && temp < 102.2) points += 2;
  else if (temp >= 102.2) points += 1;

  if (symptoms >= 2 && symptoms < 4) points += 3;
  else if (symptoms >= 4 && symptoms < 6) points += 2;
  else if (symptoms >= 6) points += 1;

  if (visited > 2) points += 1;
  else if (visited <= 2) points += 2;

  return (points/14)*100;
}


const Status = () => {
const [height,setHeight] = useState('');
const [weight,setWeight] = useState('');
const [symp,setSymp] = useState('');
const [temp,setTemp] = useState('');
const [vis,setVis] = useState('');
const [val,setVal] = useState('');

const showResult=(ev)=>{
  ev.preventDefault();
  let result = calculateHealthScore(height,weight,symp,temp,vis);
  alert(`You are ${76}% fit.`);
}

  return (
    <div>
      <Header/>
      <h2 className="login-head">Check your health status</h2>
      <form className='main-login'>
  <div className="login-form mb-3">
    <label for="exampleInputEmail1" className="form-label">Enter your height</label>
    <input onChange={(e)=>setHeight(e.target.value)} value={height} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="login-form mb-3">
    <label for="exampleInputEmail1" className="form-label">Enter your weight</label>
    <input onChange={(e)=>setWeight(e.target.value)} value={weight} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="login-form mb-3">
    <label for="exampleInputPassword1" className="form-label">Enter the number of symptoms</label>
    <input onChange={(e)=>setSymp(e.target.value)} value={symp} type="number" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="login-form mb-3">
    <label for="exampleInputPassword1" className="form-label">Enter your body temperature</label>
    <input onChange={(e)=>setTemp(e.target.value)} value={temp} type="number" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="login-form mb-3">
    <label for="exampleInputPassword1" className="form-label">Number of times you have visited hospital in last 2 months</label>
    <input onChange={(e)=>setVis(e.target.value)} value={vis} type="number" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button onClick={showResult} type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Status