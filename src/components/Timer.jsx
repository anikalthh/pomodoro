import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import sparkle from '../images/to-do-sparkle.png';

function Timer() {
  const [minutes, setMinutes] = useState(50);
  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  // function to handle the timer countdown logic
  useEffect(() => {
    let interval = null;
    if (timerActive) {
      interval = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          setMinutes(0);
          setSeconds(0);
        } else if (seconds === 0) {
          setMinutes(prevMinutes => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds(prevSeconds => prevSeconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, minutes, seconds]);

  // function to handle the form submit event
  const handleSubmit = event => {
    event.preventDefault();
    setTimerActive(true);
  };

  // function to handle the timer reset event
  const handleReset = () => {
    setMinutes(50);
    setSeconds(0);
    setTimerActive(false);
  };

  return (
    <div className='timer'>
      {(minutes !== 0 || seconds !== 0) && <div className="ellipse-1"></div>}
      {(minutes !== 0 || seconds !== 0) && <div className="ellipse-2"></div>}
      <img className="sparkle-1" src={sparkle}></img>
      <img className="sparkle-2" src={sparkle}></img>
      {(minutes !== 0 || seconds !== 0) && <h2 style={{ fontSize: '6em', margin: '0.5em', position:'relative', zIndex:'1'}}>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h2>}
      {minutes === 0 && seconds === 0 && <h2 style={{ fontSize: '2.5em', margin: '1.5em', position:'relative', zIndex:'1', color:'#445a3c'}}>take a break and <br /> reset whenever you're ready</h2>}
      <form onSubmit={handleSubmit}>
        
        
        <Button style={{margin:"10px"}} variant="dark" className="btn btn-outline-light" type="submit">✧ start the hustle ✧</Button>
        
        <Button variant="dark" className="btn btn-outline-light" type="button" onClick={handleReset}>RESET</Button>
      </form>
    </div>
  );
}

export default Timer;
