import React, { useState, useEffect } from 'react';
import Header from '../components/Layouts/Header';

const Reminder = () => {
  const [reminder, setReminder] = useState('Nothing for now!');

  const checkTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    const reminderHours = 8;
    const reminderMinutes = 0;

    if (hours === reminderHours && minutes === reminderMinutes) {
      setReminder('Its medicine time! Please take your medicines.');
    } else {
      setReminder('Nothing for now!');
    }
  };

  useEffect(() => {
    const interval = setInterval(checkTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header/>
      <h2 className='login-head'>Medicine Reminder</h2>
      {reminder && <p style={{'margin-left': '520px', 'margin-top':'50px', 'font-size':'1.5rem'}}>{reminder}</p>}
    </div>
  );
};

export default Reminder;