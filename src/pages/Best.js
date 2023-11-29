import React, {useState} from 'react';
import Header from '../components/Layouts/Header';

const Best = () => {
  const [disease,setDisease] = useState('');
  const diseaseBest = {
    "COVID-19": ["Hospital A", "Hospital B", "Hospital C"],
    "Influenza": ["Hospital D", "Hospital E"],
    "Diabetes": ["Hospital F", "Hospital G"],
    "Asthma": ["Hospital H", "Hospital I", "Hospital J"],
    "Heart Disease": ["Hospital K", "Hospital L"],
    "Cancer": ["Hospital M", "Hospital N", "Hospital O"],
    "HIV/AIDS": ["Hospital P", "Hospital Q"],
    "Alzheimer's": ["Hospital R", "Hospital S"],
    "Stroke": ["Hospital T", "Hospital U"],
    "Chronic Kidney Disease": ["Hospital V", "Hospital W"],
    "Obesity": ["Hospital X", "Hospital Y"],
    "Arthritis": ["Hospital Z", "Hospital AA"],
    "Epilepsy": ["Hospital AB", "Hospital AC"],
    "Osteoporosis": ["Hospital AD", "Hospital AE"],
    "Hepatitis": ["Hospital AF", "Hospital AG"],
    "Schizophrenia": ["Hospital AH", "Hospital AI"],
    "Parkinson's Disease": ["Hospital AJ", "Hospital AK"],
    "Migraine": ["Hospital AL", "Hospital AM"],
    "Tuberculosis": ["Hospital AN", "Hospital AO"],
    "Rheumatoid Arthritis": ["Hospital AP", "Hospital AQ"],
    "Celiac Disease": ["Hospital AR", "Hospital AS"],
    "Chronic Obstructive Pulmonary Disease (COPD)": ["Hospital AT", "Hospital AU"],
    "Endometriosis": ["Hospital AV", "Hospital AW"],
    "Gout": ["Hospital AX", "Hospital AY"],
    "Psoriasis": ["Hospital AZ", "Hospital BA"],
    "Crohn's Disease": ["Hospital BB", "Hospital BC"],
    "Ulcerative Colitis": ["Hospital BD", "Hospital BE"],
  };
  
  let hosp = '';

  const handleclick=()=>{
    hosp = diseaseBest[`${disease}`];
    alert(hosp);
  }

  return (
    <div>
      <Header/>
      <h2 className="best-form-title">Find hospitals which have the solution to your problem</h2>
      <form className="best-form">
  <div className="form-best mb-3">
    <label for="exampleInputEmail1" className="form-label">Enter the disease</label>
    <input onChange={(e)=>setDisease(e.target.value)} value={disease} type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <button onClick={handleclick} type="submit" className="best-submit btn btn-primary">Submit</button>
</form>
    </div>
  );
};

export default Best;