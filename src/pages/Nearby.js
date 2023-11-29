import React, {useState,useEffect} from 'react'
import Header from '../components/Layouts/Header';
import cors from 'cors';


const Nearby = () => {

  const [nearbyHospitals, setNearbyHospitals] = useState('');

  const bestHospitalsInIndia = {
    'Mumbai': 'Lilavati Hospital and Research Centre',
    'Delhi': 'All India Institute of Medical Sciences (AIIMS)',
    'Bangalore': 'Apollo Hospitals',
    'Chennai': 'Fortis Malar Hospital',
    'Kolkata': 'Apollo Gleneagles Hospital',
    'Hyderabad': 'Apollo Hospitals, Jubilee Hills',
    'Pune': 'Sahyadri Super Speciality Hospital',
    'Ahmedabad': 'Sterling Hospitals',
    'Jaipur': 'Fortis Escorts Hospital',
    'Surat': 'BAPS Pramukh Swami Hospital',
    'Lucknow': 'Sanjay Gandhi Postgraduate Institute of Medical Sciences',
    'Kanpur': 'Regency Hospital',
    'Nagpur': 'Meditrina Institute of Medical Sciences',
    'Visakhapatnam': 'Care Hospitals',
    'Indore': 'Choithram Hospital and Research Centre',
    'Thane': 'Jupiter Hospital',
    'Bhopal': 'Bansal Hospital',
    'Patna': 'AIIMS Patna',
    'Vadodara': 'Sterling Hospital',
    'Ghaziabad': 'Yashoda Super Speciality Hospital',
    'Ludhiana': 'Fortis Hospital',
    'Agra': 'Pushpanjali Hospital and Research Centre',
    'Nashik': 'Wockhardt Hospitals',
    'Faridabad': 'Asian Institute of Medical Sciences',
    'Meerut': 'Anand Hospital',
    'Rajkot': 'Sunflower Hospital',
    'Varanasi': 'Heritage Hospitals',
    'Srinagar': 'Sher-i-Kashmir Institute of Medical Sciences',
    'Aurangabad': 'Apollo Hospitals',
    'Dhanbad': 'Central Hospital',
    'Jamshedpur': 'Tata Main Hospital',
  };
  


 /* useEffect(() => {

    const apiKey = 'AIzaSyDXLSdaxhJh76MbpBWMtB9OeoKSOgVIoaM';

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=hospital&key=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          setNearbyHospitals(data.results);
        })
        .catch((error) => {
          console.error('Error fetching hospitals:', error);
        });
    });
  }, []); */

  let hosp = '';

  const handleClick=()=>{
    hosp = bestHospitalsInIndia[`${nearbyHospitals}`];
    setNearbyHospitals(hosp);
    alert(hosp);
  }

  return (
    <div>
      <Header/>
      <h2 className="best-form-title">Find nearby hospitals</h2>
      <form className="best-form">
  <div className="form-best mb-3">
    <label for="exampleInputEmail1" className="form-label">Enter your city</label>
    <input onChange={(e)=>setNearbyHospitals(e.target.value)} value={nearbyHospitals} type="string" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <button onClick={handleClick} type="submit" className="best-submit btn btn-primary">Submit</button>
</form>
    </div>
  );
};

export default Nearby